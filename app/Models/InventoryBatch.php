<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class InventoryBatch extends Model
{
    protected $table = 'inventory_batches';

    protected $fillable = [
        'batch_number', 'material', 'supplier_id', 'manufacture_date', 'expiry_date', 'quantity',
        'remaining_quantity',
    ];

    protected $casts = [
        'quantity' => 'decimal:3',
        'remaining_quantity' => 'decimal:3',
    ];
}
