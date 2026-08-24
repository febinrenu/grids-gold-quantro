<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class GoldSavingScheme extends Model
{
    use SoftDeletes;

    protected $table = 'gold_saving_schemes';

    protected $fillable = [
        'client_id', 'scheme_name', 'duration_months', 'monthly_installment_amount',
        'start_date', 'maturity_date', 'status', 'bonus_percentage',
        'total_deposited_amount', 'total_deposited_weight', 'currency_id', 'notes',
    ];

    protected $casts = [
        'start_date' => 'date',
        'maturity_date' => 'date',
        'monthly_installment_amount' => 'decimal:2',
        'bonus_percentage' => 'decimal:2',
        'total_deposited_amount' => 'decimal:2',
        'total_deposited_weight' => 'decimal:3',
    ];

    public function client()
    {
        return $this->belongsTo(Client::class, 'client_id');
    }

    public function deposits()
    {
        return $this->hasMany(GoldSavingSchemeDeposit::class, 'scheme_id');
    }
}
