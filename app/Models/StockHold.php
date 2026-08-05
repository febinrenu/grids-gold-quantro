<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class StockHold extends Model
{
    protected $table = 'stock_holds';

    protected $fillable = [
        'product_id', 'hold_reason', 'held_by', 'held_at', 'released_at', 'status',
    ];
}
