<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ItemWeightHistory extends Model
{
    public $timestamps = false;

    protected $table = 'item_weight_history';

    protected $fillable = [
        'product_id', 'old_gross_weight', 'new_gross_weight', 'old_net_weight', 'new_net_weight',
        'old_metal_weight', 'new_metal_weight', 'reason', 'approved_by',
    ];

    protected $casts = [
        'old_gross_weight' => 'decimal:3',
        'new_gross_weight' => 'decimal:3',
        'old_net_weight' => 'decimal:3',
        'new_net_weight' => 'decimal:3',
        'old_metal_weight' => 'decimal:3',
        'new_metal_weight' => 'decimal:3',
    ];
}
