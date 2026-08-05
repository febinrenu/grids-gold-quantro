<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BankAccount extends Model
{
    protected $table = 'bank_accounts';

    protected $fillable = [
        'bank_name', 'branch_id', 'account_number', 'ifsc_swift', 'currency_id', 'current_balance',
        'is_active',
    ];

    protected $casts = [
        'is_active' => 'boolean',
        'current_balance' => 'decimal:3',
    ];
}
