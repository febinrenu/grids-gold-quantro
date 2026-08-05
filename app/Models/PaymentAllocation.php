<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PaymentAllocation extends Model
{
    protected $table = 'payment_allocations';

    protected $fillable = [
        'payment_type', 'payment_id', 'invoice_type', 'invoice_id', 'amount_allocated',
    ];

    protected $casts = [
        'amount_allocated' => 'decimal:3',
    ];
}
