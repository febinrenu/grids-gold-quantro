<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class WarehouseReceipt extends Model
{
    protected $table = 'warehouse_receipts';

    protected $fillable = [
        'receipt_number', 'warehouse_id', 'source_type', 'source_id', 'received_by', 'received_at',
    ];
}
