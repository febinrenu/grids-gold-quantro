<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class InventoryFreeze extends Model
{
    protected $table = 'inventory_freezes';

    protected $fillable = [
        'freeze_number', 'product_id', 'reason', 'frozen_by', 'start_date', 'end_date', 'status',
    ];
}
