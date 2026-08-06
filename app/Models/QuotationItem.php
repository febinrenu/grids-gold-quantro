<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class QuotationItem extends Model
{
    public $timestamps = false;

    protected $table = 'quotation_items';

    protected $fillable = [
        'quotation_id', 'product_template_id', 'product_id', 'estimated_weight', 'selling_price',
        'making_charge', 'stone_cost', 'discount', 'tax',
    ];

    protected $casts = [
        'estimated_weight' => 'decimal:3',
        'selling_price' => 'decimal:3',
        'making_charge' => 'decimal:2',
        'stone_cost' => 'decimal:2',
        'discount' => 'decimal:3',
        'tax' => 'decimal:3',
    ];
}
