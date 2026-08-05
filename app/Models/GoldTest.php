<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class GoldTest extends Model
{
    public $timestamps = false;

    protected $table = 'gold_tests';

    protected $fillable = [
        'used_gold_purchase_item_id', 'product_id', 'test_method', 'tester_id',
        'purity_percentage', 'fineness', 'result', 'tested_at',
    ];

    protected $casts = [
        'purity_percentage' => 'decimal:2',
        'fineness' => 'decimal:3',
    ];
}
