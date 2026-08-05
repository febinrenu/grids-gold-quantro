<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class FinancialClosing extends Model
{
    public $timestamps = false;

    protected $table = 'financial_closings';

    protected $fillable = [
        'financial_period_id', 'closing_type', 'closed_by', 'closing_date', 'status',
    ];

    public function financialPeriod()
    {
        return $this->belongsTo(FinancialPeriod::class, 'financial_period_id');
    }
}
