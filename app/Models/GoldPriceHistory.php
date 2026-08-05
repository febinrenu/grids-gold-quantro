<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class GoldPriceHistory extends Model
{
    public $timestamps = false;

    protected $table = 'gold_price_history';

    protected $fillable = [
        'metal_type_id', 'karat_id', 'currency_id', 'effective_date', 'buy_price', 'sell_price',
        'source', 'approved_by',
    ];

    protected $casts = [
        'buy_price' => 'decimal:2',
        'sell_price' => 'decimal:2',
    ];
}
