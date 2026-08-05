<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ManufacturingReceiptItem extends Model
{
    public $timestamps = false;

    protected $table = 'manufacturing_receipt_items';

    protected $fillable = [
        'manufacturing_receipt_id', 'product_id', 'gross_weight', 'stone_weight', 'net_weight',
        'fine_gold_weight', 'certificate_number', 'hallmark_reference',
    ];

    protected $casts = [
        'gross_weight' => 'decimal:3',
        'stone_weight' => 'decimal:3',
        'net_weight' => 'decimal:3',
        'fine_gold_weight' => 'decimal:3',
    ];

    public function manufacturingReceipt()
    {
        return $this->belongsTo(ManufacturingReceipt::class, 'manufacturing_receipt_id');
    }
}
