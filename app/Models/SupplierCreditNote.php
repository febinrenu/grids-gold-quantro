<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SupplierCreditNote extends Model
{
    protected $table = 'supplier_credit_notes';

    protected $fillable = [
        'credit_note_number', 'provider_id', 'purchase_return_id', 'amount',
        'gold_weight_adjustment', 'issue_date', 'status',
    ];

    protected $casts = [
        'amount' => 'decimal:3',
        'gold_weight_adjustment' => 'decimal:3',
    ];

    public function provider()
    {
        return $this->belongsTo(Provider::class, 'provider_id');
    }
}
