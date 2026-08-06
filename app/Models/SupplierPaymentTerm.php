<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SupplierPaymentTerm extends Model
{
    public $timestamps = false;

    protected $table = 'supplier_payment_terms';

    protected $fillable = [
        'name', 'due_days', 'discount_percentage', 'is_active',
    ];

    protected $casts = [
        'is_active' => 'boolean',
        'discount_percentage' => 'decimal:2',
    ];
}
