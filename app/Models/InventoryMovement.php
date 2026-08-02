<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class InventoryMovement extends Model
{
    const UPDATED_AT = null;

    protected $fillable = [
        'warehouse_id', 'warehouse_location_id', 'product_id', 'product_variant_id',
        'movement_type', 'quantity_delta', 'weight_delta',
        'source_type', 'source_id', 'user_id',
    ];

    protected $casts = [
        'warehouse_id' => 'integer',
        'warehouse_location_id' => 'integer',
        'product_id' => 'integer',
        'product_variant_id' => 'integer',
        'quantity_delta' => 'decimal:4',
        'weight_delta' => 'decimal:4',
        'source_id' => 'integer',
        'user_id' => 'integer',
        'created_at' => 'datetime',
    ];

    public function product()
    {
        return $this->belongsTo(Product::class);
    }

    public function warehouse()
    {
        return $this->belongsTo(Warehouse::class);
    }

    public function warehouseLocation()
    {
        return $this->belongsTo(WarehouseLocation::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
