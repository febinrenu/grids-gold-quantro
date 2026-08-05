<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BarcodeRegistry extends Model
{
    protected $table = 'barcode_registry';

    protected $fillable = [
        'barcode_value', 'barcode_type', 'product_id', 'product_serial_id', 'print_count',
        'last_printed_at', 'status',
    ];
}
