<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class DiamondPriceRate extends Model
{
    protected $table = 'diamond_price_rates';

    protected $fillable = [
        'shape', 'color_grade', 'clarity_grade', 'carat_min', 'carat_max',
        'price_per_carat', 'currency_id', 'rate_source', 'effective_at',
        'expires_at', 'status', 'created_by',
    ];

    protected $casts = [
        'carat_min' => 'decimal:2',
        'carat_max' => 'decimal:2',
        'price_per_carat' => 'decimal:2',
        'effective_at' => 'datetime',
        'expires_at' => 'datetime',
    ];

    public function currency()
    {
        return $this->belongsTo(Currency::class, 'currency_id');
    }
}
