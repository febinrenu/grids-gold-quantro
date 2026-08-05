<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class InventoryCountItem extends Model
{
    protected $table = 'inventory_count_items';

    protected $fillable = [
        'inventory_count_id', 'product_id', 'expected_warehouse_location_id',
        'counted_warehouse_location_id', 'expected_weight', 'counted_weight', 'variance',
        'remarks',
    ];

    protected $casts = [
        'expected_weight' => 'decimal:3',
        'counted_weight' => 'decimal:3',
        'variance' => 'decimal:3',
    ];

    public function inventoryCount()
    {
        return $this->belongsTo(InventoryCount::class, 'inventory_count_id');
    }
}
