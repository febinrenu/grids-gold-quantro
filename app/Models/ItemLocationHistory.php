<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ItemLocationHistory extends Model
{
    public $timestamps = false;

    protected $table = 'item_location_history';

    protected $fillable = [
        'product_id', 'product_serial_id', 'previous_warehouse_location_id',
        'new_warehouse_location_id', 'movement_type', 'user_id', 'remarks',
    ];
}
