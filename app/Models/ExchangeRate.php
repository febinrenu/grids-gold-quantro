<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ExchangeRate extends Model
{
    protected $table = 'exchange_rates';

    protected $fillable = [
        'base_currency_id', 'target_currency_id', 'rate', 'effective_date', 'source',
    ];

    protected $casts = [
        'rate' => 'decimal:6',
    ];
}
