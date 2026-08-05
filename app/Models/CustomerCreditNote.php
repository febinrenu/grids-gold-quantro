<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CustomerCreditNote extends Model
{
    protected $table = 'customer_credit_notes';

    protected $fillable = [
        'credit_note_number', 'client_id', 'sales_return_id', 'amount', 'status',
    ];

    protected $casts = [
        'amount' => 'decimal:3',
    ];

    public function client()
    {
        return $this->belongsTo(Client::class, 'client_id');
    }
}
