<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BankTransaction extends Model
{
    protected $table = 'bank_transactions';

    protected $fillable = [
        'bank_account_id', 'transaction_type', 'amount', 'transaction_date', 'reference',
        'is_reconciled',
    ];

    protected $casts = [
        'is_reconciled' => 'boolean',
        'amount' => 'decimal:3',
    ];

    public function bankAccount()
    {
        return $this->belongsTo(BankAccount::class, 'bank_account_id');
    }
}
