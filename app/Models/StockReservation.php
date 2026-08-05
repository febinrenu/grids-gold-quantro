<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class StockReservation extends Model
{
    protected $table = 'stock_reservations';

    protected $fillable = [
        'reservation_number', 'product_id', 'client_id', 'reserved_by', 'reservation_date',
        'expiry_date', 'reservation_status',
    ];
}
