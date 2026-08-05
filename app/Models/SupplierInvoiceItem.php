<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SupplierInvoiceItem extends Model
{
    public $timestamps = false;

    protected $table = 'supplier_invoice_items';

    protected $fillable = [
        'supplier_invoice_id', 'purchase_detail_id', 'goods_receipt_item_id', 'cost', 'tax',
        'discount', 'total',
    ];

    protected $casts = [
        'cost' => 'decimal:3',
        'tax' => 'decimal:3',
        'discount' => 'decimal:3',
        'total' => 'decimal:3',
    ];

    public function supplierInvoice()
    {
        return $this->belongsTo(SupplierInvoice::class, 'supplier_invoice_id');
    }
}
