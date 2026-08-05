<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class InventoryLabel extends Model
{
    protected $table = 'inventory_labels';

    protected $fillable = [
        'product_id', 'label_type', 'printed_at', 'printed_by', 'print_count', 'printer',
    ];
}
