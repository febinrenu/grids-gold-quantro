<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CustomerDeposit extends Model
{
    protected $table = 'customer_deposits';

    protected $fillable = [
        'deposit_number', 'client_id', 'amount', 'balance', 'reference_type', 'reference_id',
    ];

    protected $casts = [
        'amount' => 'decimal:3',
        'balance' => 'decimal:3',
    ];

    public function client()
    {
        return $this->belongsTo(Client::class, 'client_id');
    }
}
