<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class GoodsReceipt extends Model
{
    protected $table = 'goods_receipts';

    protected $fillable = [
        'grn_number', 'purchase_id', 'warehouse_id', 'received_by', 'receipt_date', 'status',
        'inspection_status',
    ];

    public function purchase()
    {
        return $this->belongsTo(Purchase::class, 'purchase_id');
    }
}
