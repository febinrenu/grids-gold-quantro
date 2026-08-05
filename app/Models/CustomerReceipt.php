<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CustomerReceipt extends Model
{
    protected $table = 'customer_receipts';

    protected $fillable = [
        'receipt_number', 'sale_id', 'amount', 'payment_method', 'transaction_reference',
        'received_by', 'received_at',
    ];

    protected $casts = [
        'amount' => 'decimal:3',
    ];

    public function sale()
    {
        return $this->belongsTo(Sale::class, 'sale_id');
    }
}
