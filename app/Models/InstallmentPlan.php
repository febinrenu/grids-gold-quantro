<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class InstallmentPlan extends Model
{
    protected $table = 'installment_plans';

    protected $fillable = [
        'plan_number', 'client_id', 'sale_id', 'total_installments', 'installment_amount',
        'outstanding_balance', 'status',
    ];

    protected $casts = [
        'installment_amount' => 'decimal:3',
        'outstanding_balance' => 'decimal:3',
    ];

    public function sale()
    {
        return $this->belongsTo(Sale::class, 'sale_id');
    }

    public function client()
    {
        return $this->belongsTo(Client::class, 'client_id');
    }
}
