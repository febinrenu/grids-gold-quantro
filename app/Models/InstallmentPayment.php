<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class InstallmentPayment extends Model
{
    public $timestamps = false;

    protected $table = 'installment_payments';

    protected $fillable = [
        'installment_plan_id', 'due_date', 'payment_date', 'amount', 'penalty', 'status',
    ];

    protected $casts = [
        'amount' => 'decimal:3',
        'penalty' => 'decimal:3',
    ];

    public function installmentPlan()
    {
        return $this->belongsTo(InstallmentPlan::class, 'installment_plan_id');
    }
}
