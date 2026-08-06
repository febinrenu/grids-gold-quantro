<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PurchaseReturnItem extends Model
{
    public $timestamps = false;

    protected $table = 'purchase_return_items';

    protected $fillable = [
        'purchase_return_id', 'product_id', 'return_weight', 'return_cost', 'reason',
    ];

    protected $casts = [
        'return_weight' => 'decimal:3',
        'return_cost' => 'decimal:3',
    ];
}
