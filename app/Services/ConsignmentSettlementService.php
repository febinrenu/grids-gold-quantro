<?php

namespace App\Services;

use App\Models\ConsignmentSettlement;
use App\Models\Product;
use App\Models\Sale;

/**
 * PI-9 gap: auto-creates a payable-to-owner settlement record whenever a
 * consigned/memo/customer-owned line item sells (or is returned). Rep
 * commission is intentionally NOT duplicated here — SaleCommission /
 * CommissionService already runs for every sale automatically; this only
 * covers the owner-settlement side that had no automation at all.
 */
class ConsignmentSettlementService
{
    protected const SETTLEABLE_TYPES = ['memo', 'consignment', 'supplier_consignment', 'customer_owned'];

    /**
     * @return \App\Models\ConsignmentSettlement[]
     */
    public function settleForSale(Sale $sale): array
    {
        $created = [];

        foreach ($sale->details as $detail) {
            if (! $detail->product_id) {
                continue;
            }

            $product = Product::find($detail->product_id);
            if (! $product || ! in_array($product->ownership_type, self::SETTLEABLE_TYPES, true)) {
                continue;
            }

            // Idempotent: re-processing the same sale (e.g. a completed-status
            // re-trigger) must never double-bill the owner for the same line.
            $existing = ConsignmentSettlement::where('sale_id', $sale->id)
                ->where('sale_detail_id', $detail->id)
                ->where('settlement_type', 'sale')
                ->first();
            if ($existing) {
                continue;
            }

            $quantity = (float) ($detail->quantity ?? 1);
            $unitCost = (float) ($product->cost ?? 0);

            $created[] = ConsignmentSettlement::create([
                'product_id' => $product->id,
                'sale_id' => $sale->id,
                'sale_detail_id' => $detail->id,
                'ownership_type' => $product->ownership_type,
                'settlement_type' => 'sale',
                'quantity' => $quantity,
                'unit_cost' => $unitCost,
                'total_owed' => round($quantity * $unitCost, 2),
                'status' => 'pending',
            ]);
        }

        return $created;
    }

    /**
     * Reverse a pending settlement when a sold consigned item is returned.
     */
    public function reverseForReturn(int $saleId, int $saleDetailId): ?ConsignmentSettlement
    {
        $original = ConsignmentSettlement::where('sale_id', $saleId)
            ->where('sale_detail_id', $saleDetailId)
            ->where('settlement_type', 'sale')
            ->first();

        if (! $original) {
            return null;
        }

        if ($original->status === 'pending') {
            $original->update(['status' => 'cancelled']);

            return $original;
        }

        // Already settled with the owner — record a reversal instead of
        // silently cancelling money that may already have been paid out.
        return ConsignmentSettlement::create([
            'product_id' => $original->product_id,
            'sale_id' => $original->sale_id,
            'sale_detail_id' => $original->sale_detail_id,
            'ownership_type' => $original->ownership_type,
            'owner_type' => $original->owner_type,
            'owner_reference_id' => $original->owner_reference_id,
            'settlement_type' => 'return',
            'quantity' => $original->quantity,
            'unit_cost' => $original->unit_cost,
            'total_owed' => -1 * (float) $original->total_owed,
            'currency_id' => $original->currency_id,
            'status' => 'pending',
        ]);
    }

    public function markSettled(ConsignmentSettlement $settlement, ?int $userId = null): ConsignmentSettlement
    {
        $settlement->update([
            'status' => 'settled',
            'settled_at' => now(),
            'settled_by' => $userId,
        ]);

        return $settlement;
    }
}
