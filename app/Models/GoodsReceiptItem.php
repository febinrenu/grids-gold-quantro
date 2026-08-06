<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class GoodsReceiptItem extends Model
{
    public $timestamps = false;

    protected $table = 'goods_receipt_items';

    protected $fillable = [
        'goods_receipt_id', 'product_id', 'received_weight', 'karat_id', 'purity_percentage',
        'certificate_number', 'hallmark_reference', 'remarks',
    ];

    protected $casts = [
        'received_weight' => 'decimal:3',
        'purity_percentage' => 'decimal:2',
    ];

    public function goodsReceipt()
    {
        return $this->belongsTo(GoodsReceipt::class, 'goods_receipt_id');
    }
}
