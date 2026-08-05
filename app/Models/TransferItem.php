<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TransferItem extends Model
{
    protected $table = 'transfer_items';

    protected $fillable = [
        'transfer_id', 'product_id', 'product_serial_id', 'dispatch_weight', 'receive_weight',
        'dispatch_rfid', 'receive_rfid', 'quantity', 'remarks',
    ];

    protected $casts = [
        'dispatch_weight' => 'decimal:3',
        'receive_weight' => 'decimal:3',
        'quantity' => 'decimal:3',
    ];

    public function transfer()
    {
        return $this->belongsTo(Transfer::class, 'transfer_id');
    }
}
