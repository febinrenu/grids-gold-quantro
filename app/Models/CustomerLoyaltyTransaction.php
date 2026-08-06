<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CustomerLoyaltyTransaction extends Model
{
    protected $table = 'customer_loyalty_transactions';

    protected $fillable = [
        'client_id', 'transaction_type', 'points', 'reference_type', 'reference_id',
        'balance_after',
    ];

    protected $casts = [
        'points' => 'decimal:2',
        'balance_after' => 'decimal:2',
    ];

    public function client()
    {
        return $this->belongsTo(Client::class, 'client_id');
    }
}
