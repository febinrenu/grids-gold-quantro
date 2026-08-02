<?php

namespace App\Services\Jewelry;

use App\Models\GoldRate;
use App\Models\Setting;
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
            $rate = GoldRate::where('status', 'active')
                ->where('metal_type_id', $metalTypeId)
                ->where('karat_id', $karatId)
                ->where('warehouse_id', $warehouseId)
                ->when($currencyId !== null, fn ($query) => $query->where('currency_id', $currencyId))
                ->where('effective_at', '<=', $now)
                ->where(function ($query) use ($now) {
                    $query->whereNull('expires_at')
                          ->orWhere('expires_at', '>', $now);
                })
                ->orderBy('effective_at', 'desc')
                ->orderBy('id', 'desc')
                ->first();

            if ($rate) {
                return $rate;
            }
        }

        // 2. Fall back to company-wide rate (where warehouse_id is null).
        return GoldRate::where('status', 'active')
            ->where('metal_type_id', $metalTypeId)
            ->where('karat_id', $karatId)
            ->whereNull('warehouse_id')
            ->when($currencyId !== null, fn ($query) => $query->where('currency_id', $currencyId))
            ->where('effective_at', '<=', $now)
            ->where(function ($query) use ($now) {
                $query->whereNull('expires_at')
                      ->orWhere('expires_at', '>', $now);
            })
            ->orderBy('effective_at', 'desc')
            ->orderBy('id', 'desc')
            ->first();
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
