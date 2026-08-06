<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TaxTransaction extends Model
{
    public $timestamps = false;

    protected $table = 'tax_transactions';

    protected $fillable = [
        'tax_code_id', 'reference_type', 'reference_id', 'taxable_amount', 'tax_amount',
        'transaction_date',
    ];

    protected $casts = [
        'taxable_amount' => 'decimal:3',
        'tax_amount' => 'decimal:3',
    ];

    public function taxCode()
    {
        return $this->belongsTo(TaxCode::class, 'tax_code_id');
    }
}
