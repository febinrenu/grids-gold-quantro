<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Exchange extends Model
{
    protected $table = 'exchanges';

    protected $fillable = [
        'exchange_number', 'client_id', 'used_gold_purchase_id', 'sale_id', 'settlement_amount',
    ];

    protected $casts = [
        'settlement_amount' => 'decimal:3',
    ];

    public function client()
    {
        return $this->belongsTo(Client::class, 'client_id');
    }

    public function sale()
    {
        return $this->belongsTo(Sale::class, 'sale_id');
    }
}
