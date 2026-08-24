<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class GoldSavingSchemeDeposit extends Model
{
    protected $table = 'gold_saving_scheme_deposits';

    protected $fillable = [
        'scheme_id', 'deposit_date', 'amount', 'gold_rate_id', 'equivalent_weight',
        'payment_method', 'receipt_number', 'recorded_by', 'notes',
    ];

    protected $casts = [
        'deposit_date' => 'date',
        'amount' => 'decimal:2',
        'equivalent_weight' => 'decimal:3',
    ];

    public function scheme()
    {
        return $this->belongsTo(GoldSavingScheme::class, 'scheme_id');
    }

    public function goldRate()
    {
        return $this->belongsTo(GoldRate::class, 'gold_rate_id');
    }
}
