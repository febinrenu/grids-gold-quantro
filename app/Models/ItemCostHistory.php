<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ItemCostHistory extends Model
{
    public $timestamps = false;

    protected $table = 'item_cost_history';

    protected $fillable = [
        'product_id', 'old_cost', 'new_cost', 'old_making_charge_value', 'new_making_charge_value',
        'old_selling_price', 'new_selling_price', 'reason', 'changed_by',
    ];

    protected $casts = [
        'old_cost' => 'decimal:3',
        'new_cost' => 'decimal:3',
        'old_making_charge_value' => 'decimal:2',
        'new_making_charge_value' => 'decimal:2',
        'old_selling_price' => 'decimal:3',
        'new_selling_price' => 'decimal:3',
    ];
}
