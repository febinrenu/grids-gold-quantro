<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class FinancialPeriod extends Model
{
    protected $table = 'financial_periods';

    protected $fillable = [
        'fiscal_year', 'period_name', 'opening_date', 'closing_date', 'status',
    ];
}
