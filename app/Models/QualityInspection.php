<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class QualityInspection extends Model
{
    protected $table = 'quality_inspections';

    protected $fillable = [
        'goods_receipt_id', 'product_id', 'inspector_id', 'inspection_date', 'checks', 'result',
        'comments',
    ];

    protected $casts = [
        'checks' => 'array',
    ];

    public function goodsReceipt()
    {
        return $this->belongsTo(GoodsReceipt::class, 'goods_receipt_id');
    }
}
