<?php

namespace App\Services;

use App\Models\InventoryMovement;
use App\Models\Product;

class InventoryMovementService
{
    /**
     * Record one inventory movement row. Append-only — never updated or
     * reversed in place; a reversal is recorded as its own opposite-sign row.
     */
    public function record(array $attributes): InventoryMovement
    {
        if (empty($attributes['weight_delta']) && ! empty($attributes['product_id'])) {
            $product = Product::find($attributes['product_id']);
            if ($product && $product->is_jewelry_item && isset($attributes['quantity_delta'])) {
                $unitWeight = (float) ($product->jewelry_metal_weight ?? 0);
                if ($unitWeight > 0) {
                    $attributes['weight_delta'] = round($unitWeight * (float) $attributes['quantity_delta'], 4);
                }
            }
        }

        return InventoryMovement::create($attributes);
    }
}
