<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class RepairPayment extends Model
{
    public $timestamps = false;

    protected $table = 'repair_payments';

    protected $fillable = [
        'repair_order_id', 'amount', 'payment_method', 'receipt_number', 'paid_at',
    ];

    protected $casts = [
        'amount' => 'decimal:2',
    ];

    public function repairOrder()
    {
        return $this->belongsTo(RepairOrder::class, 'repair_order_id');
    }
}
