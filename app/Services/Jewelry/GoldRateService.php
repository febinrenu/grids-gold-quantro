<?php

namespace App\Services\Jewelry;

use App\Models\Currency;
use App\Models\GoldRate;
use App\Models\Karat;
use App\Models\MetalType;
use App\Models\Setting;
use App\Services\CurrencyConversionService;
use Illuminate\Database\Eloquent\Collection;
use Carbon\Carbon;

class GoldRateService
{
    /**
     * Resolve the currency to filter rates by: an explicit override, else the
     * tenant's configured default currency, else null (no currency filter —
     * preserves old behavior for tenants that never set a default currency).
     */
    protected function resolveCurrencyId(?int $currencyId): ?int
    {
        if ($currencyId !== null) {
            return $currencyId;
        }

        $setting = Setting::whereNull('deleted_at')->first();

        return $setting->currency_id ?? null;
    }

    /**
     * Get the current active gold rate for a specific metal, karat, and warehouse.
     * Warehouse-specific rates override company-wide rates (warehouse_id = null).
     * Rates are scoped to a currency (defaulting to the tenant's configured
     * currency) so a rate entered in the wrong currency can never be silently
     * applied to a sale.
     */
    public function getCurrentRate(
        int $metalTypeId,
        int $karatId,
        ?int $warehouseId = null,
        ?int $currencyId = null
    ): ?GoldRate {
        $now = Carbon::now();
        $currencyId = $this->resolveCurrencyId($currencyId);

        $setting = Setting::whereNull('deleted_at')->first();
        $branchOverrideEnabled = (bool) ($setting->gold_rate_branch_override_enabled ?? true);

        // 1. If warehouse ID is provided AND branch overrides are enabled, try
        // to find a warehouse-specific active rate first.
        if ($warehouseId !== null && $branchOverrideEnabled) {
            $rate = $this->activeRateQuery($metalTypeId, $karatId, $now)
                ->where('warehouse_id', $warehouseId)
                ->when($currencyId !== null, fn ($query) => $query->where('currency_id', $currencyId))
                ->orderBy('effective_at', 'desc')
                ->orderBy('id', 'desc')
                ->first();

            if ($rate) {
                return $rate;
            }

            $rate = $this->apiSourcedFallback($metalTypeId, $karatId, $warehouseId, $currencyId, $now);
            if ($rate) {
                return $rate;
            }
        }

        // 2. Fall back to company-wide rate (where warehouse_id is null).
        $rate = $this->activeRateQuery($metalTypeId, $karatId, $now)
            ->whereNull('warehouse_id')
            ->when($currencyId !== null, fn ($query) => $query->where('currency_id', $currencyId))
            ->orderBy('effective_at', 'desc')
            ->orderBy('id', 'desc')
            ->first();

        if ($rate) {
            return $rate;
        }

        return $this->apiSourcedFallback($metalTypeId, $karatId, null, $currencyId, $now);
    }

    /**
     * Base query shared by every "current rate" lookup: active status,
     * matching metal/karat, already effective, not yet expired.
     */
    protected function activeRateQuery(int $metalTypeId, int $karatId, Carbon $now)
    {
        return GoldRate::where('status', 'active')
            ->where('metal_type_id', $metalTypeId)
            ->where('karat_id', $karatId)
            ->where('effective_at', '<=', $now)
            ->where(function ($query) use ($now) {
                $query->whereNull('expires_at')
                      ->orWhere('expires_at', '>', $now);
            });
    }

    /**
     * Live-synced ('api') rates are stored once, in a canonical currency
     * (USD), and are convertible on demand — unlike manual rates, which are
     * currency-specific by design and must never be silently reinterpreted
     * in a different currency. This is only consulted when no exact
     * currency match was found above, so it never overrides a manual rate.
     */
    protected function apiSourcedFallback(
        int $metalTypeId,
        int $karatId,
        ?int $warehouseId,
        ?int $currencyId,
        Carbon $now
    ): ?GoldRate {
        $rate = $this->activeRateQuery($metalTypeId, $karatId, $now)
            ->where('warehouse_id', $warehouseId)
            ->where('rate_source', 'api')
            ->orderBy('effective_at', 'desc')
            ->orderBy('id', 'desc')
            ->first();

        if (! $rate) {
            return null;
        }

        if ($currencyId === null || $rate->currency_id === $currencyId) {
            return $rate;
        }

        $targetCurrency = Currency::find($currencyId);
        $storedCurrency = Currency::find($rate->currency_id);

        if (! $targetCurrency || ! $storedCurrency) {
            return $rate;
        }

        $exchangeRate = CurrencyConversionService::getExchangeRate($storedCurrency->code, $targetCurrency->code);

        // Non-persisted conversion: mutate an in-memory copy only.
        $converted = $rate->replicate();
        $converted->exists = true;
        $converted->id = $rate->id;
        $converted->currency_id = $targetCurrency->id;
        $converted->rate_per_weight_unit = round($rate->rate_per_weight_unit * $exchangeRate, 2);

        return $converted;
    }

    /**
     * Store a live rate fetched from a metals price API. Purity math is
     * done locally (karat's purity_percentage against the metal's spot
     * price per gram) so one API call per metal covers every karat.
     * Always stored in USD — getCurrentRate() converts to the requested
     * currency on read, so a tenant's currency change takes effect
     * immediately without waiting for the next sync.
     */
    public function syncFromApi(
        MetalType $metalType,
        Karat $karat,
        MetalPriceService $priceService,
        ?int $warehouseId = null,
        ?int $userId = null
    ): GoldRate {
        $pricePerGramUsd = $priceService->getSpotPricePerGramUsd($metalType->code);
        $purityFraction = ((float) $karat->purity_percentage) / 100;

        $usdCurrency = Currency::firstOrCreate(
            ['code' => 'USD'],
            ['name' => 'US Dollar', 'symbol' => '$']
        );

        return GoldRate::create([
            'metal_type_id'        => $metalType->id,
            'karat_id'             => $karat->id,
            'rate_per_weight_unit' => round($pricePerGramUsd * $purityFraction, 2),
            'currency_id'          => $usdCurrency->id,
            'warehouse_id'         => $warehouseId,
            'created_by'           => $userId,
            'effective_at'         => Carbon::now(),
            'status'               => 'active',
            'rate_source'          => 'api',
            'weight_uom'           => 'g',
        ]);
    }

    /**
     * Store a new gold rate record. Always inserts a new row to preserve rate history.
     */
    public function setRate(
        int $metalTypeId,
        int $karatId,
        float $ratePerUnit,
        int $currencyId,
        ?int $warehouseId,
        int $userId,
        string $weightUom = 'g'
    ): GoldRate {
        $rate = GoldRate::create([
            'metal_type_id'        => $metalTypeId,
            'karat_id'             => $karatId,
            'rate_per_weight_unit' => $ratePerUnit,
            'currency_id'          => $currencyId,
            'warehouse_id'         => $warehouseId,
            'created_by'           => $userId,
            'effective_at'         => Carbon::now(),
            'status'               => 'active',
            'rate_source'          => 'manual',
            'weight_uom'           => $weightUom ?: 'g',
        ]);

        app(\App\Services\AuditLogService::class)->log(
            'GoldRate',
            $rate->id,
            'rate_created',
            null,
            $rate->only(['metal_type_id', 'karat_id', 'rate_per_weight_unit', 'currency_id', 'warehouse_id']),
            $userId
        );

        return $rate;
    }

    /**
     * Retrieve history of gold rates ordered newest first, with optional filters.
     *
     * Backward compatibility note:
     * - Older callers passed the date-range array as the 3rd argument.
     * - Newer callers may pass warehouse_id as the 3rd argument and date range as the 4th.
     *
     * @param int|null $metalTypeId
     * @param int|null $karatId
     * @param int|array|null $warehouseIdOrDateRange
     * @param array|null $dateRange
     */
    public function history(
        ?int $metalTypeId = null,
        ?int $karatId = null,
        $warehouseIdOrDateRange = null,
        ?array $dateRange = null
    ): Collection {
        $warehouseId = null;

        if (is_array($warehouseIdOrDateRange) && $dateRange === null) {
            $dateRange = $warehouseIdOrDateRange;
        } elseif ($warehouseIdOrDateRange !== null) {
            $warehouseId = (int) $warehouseIdOrDateRange;
        }

        $query = GoldRate::with(['metalType', 'karat', 'currency', 'warehouse']);

        if ($metalTypeId !== null) {
            $query->where('metal_type_id', $metalTypeId);
        }

        if ($karatId !== null) {
            $query->where('karat_id', $karatId);
        }

        if ($warehouseId !== null) {
            $query->where('warehouse_id', $warehouseId);
        }

        if ($dateRange) {
            $start = $dateRange['start'] ?? $dateRange[0] ?? null;
            $end = $dateRange['end'] ?? $dateRange[1] ?? null;

            if ($start && $end) {
                $query->whereBetween('effective_at', [$start, $end]);
            } elseif ($start) {
                $query->where('effective_at', '>=', $start);
            } elseif ($end) {
                $query->where('effective_at', '<=', $end);
            }
        }

        return $query->orderBy('effective_at', 'desc')
            ->orderBy('id', 'desc')
            ->get();
    }
}
