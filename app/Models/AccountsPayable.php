<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AccountsPayable extends Model
{
    protected $table = 'accounts_payable';

    protected $fillable = [
        'provider_id', 'supplier_invoice_id', 'due_date', 'outstanding_amount', 'aging_bucket',
        'status',
    ];

    protected $casts = [
        'outstanding_amount' => 'decimal:3',
    ];

    public function provider()
    {
        return $this->belongsTo(Provider::class, 'provider_id');
    }
}
