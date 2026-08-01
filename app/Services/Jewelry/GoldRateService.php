<?php

namespace App\Services\Jewelry;

use App\Models\GoldRate;
use Illuminate\Database\Eloquent\Collection;
use Carbon\Carbon;

class GoldRateService
{
    /**
     * Get the current active gold rate for a specific metal, karat, and warehouse.
     * Warehouse-specific rates override company-wide rates (warehouse_id = null).
     */
    public function getCurrentRate(
        int $metalTypeId,
        int $karatId,
        ?int $warehouseId = null
    ): ?GoldRate {
        $now = Carbon::now();

        // 1. If warehouse ID is provided, try to find a warehouse-specific active rate first.
        if ($warehouseId !== null) {
            $rate = GoldRate::where('status', 'active')
                ->where('metal_type_id', $metalTypeId)
                ->where('karat_id', $karatId)
                ->where('warehouse_id', $warehouseId)
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
        int $userId
    ): GoldRate {
        return GoldRate::create([
            'metal_type_id'        => $metalTypeId,
            'karat_id'             => $karatId,
            'rate_per_weight_unit' => $ratePerUnit,
            'currency_id'          => $currencyId,
            'warehouse_id'         => $warehouseId,
            'created_by'           => $userId,
            'effective_at'         => Carbon::now(),
            'status'               => 'active',
            'rate_source'          => 'manual',
            'weight_uom'           => 'g',
        ]);
    }

    /**
     * Retrieve history of gold rates ordered newest first, with optional date range filter.
     */
    public function history(
        int $metalTypeId,
        int $karatId,
        ?array $dateRange = null
    ): Collection {
        $query = GoldRate::where('metal_type_id', $metalTypeId)
            ->where('karat_id', $karatId);

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
