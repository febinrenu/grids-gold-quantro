<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SalesOrderItem extends Model
{
    public $timestamps = false;

    protected $table = 'sales_order_items';

    protected $fillable = [
        'sales_order_id', 'product_id', 'quantity', 'estimated_weight', 'reserved_inventory_id',
        'selling_price', 'status',
    ];

    protected $casts = [
        'quantity' => 'decimal:3',
        'estimated_weight' => 'decimal:3',
        'selling_price' => 'decimal:3',
    ];

    public function salesOrder()
    {
        return $this->belongsTo(SalesOrder::class, 'sales_order_id');
    }
}
