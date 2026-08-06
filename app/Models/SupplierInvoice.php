<?php

namespace App\Models;

use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Model;

class SupplierInvoice extends Model
{
    use SoftDeletes;

    protected $table = 'supplier_invoices';

    protected $fillable = [
        'invoice_number', 'provider_id', 'invoice_date', 'due_date', 'currency_id',
        'exchange_rate', 'total_amount', 'tax_amount', 'discount_amount', 'status',
    ];

    protected $casts = [
        'exchange_rate' => 'decimal:6',
        'total_amount' => 'decimal:3',
        'tax_amount' => 'decimal:3',
        'discount_amount' => 'decimal:3',
    ];

    public function provider()
    {
        return $this->belongsTo(Provider::class, 'provider_id');
    }
}
