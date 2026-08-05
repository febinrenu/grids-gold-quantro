<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CashAccount extends Model
{
    protected $table = 'cash_accounts';

    protected $fillable = [
        'name', 'type', 'warehouse_id', 'current_balance', 'is_active',
    ];

    protected $casts = [
        'is_active' => 'boolean',
        'current_balance' => 'decimal:3',
    ];
}
