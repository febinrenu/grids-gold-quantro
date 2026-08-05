<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ManufacturingReceipt extends Model
{
    protected $table = 'manufacturing_receipts';

    protected $fillable = [
        'receipt_number', 'manufacturing_order_id', 'received_by', 'receipt_date',
    ];

    public function manufacturingOrder()
    {
        return $this->belongsTo(ManufacturingOrder::class, 'manufacturing_order_id');
    }
}
