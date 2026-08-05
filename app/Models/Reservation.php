<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Reservation extends Model
{
    protected $table = 'reservations';

    protected $fillable = [
        'reservation_number', 'client_id', 'product_id', 'reservation_date', 'expiry_date',
        'deposit_amount', 'status',
    ];

    protected $casts = [
        'deposit_amount' => 'decimal:3',
    ];

    public function client()
    {
        return $this->belongsTo(Client::class, 'client_id');
    }
}
