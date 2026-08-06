<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class GoldExchangeTransaction extends Model
{
    protected $table = 'gold_exchange_transactions';

    protected $fillable = [
        'client_id', 'used_gold_purchase_id', 'sale_id', 'settlement_amount',
    ];

    protected $casts = [
        'settlement_amount' => 'decimal:3',
    ];

    public function client()
    {
        return $this->belongsTo(Client::class, 'client_id');
    }

    public function usedGoldPurchase()
    {
        return $this->belongsTo(UsedGoldPurchase::class, 'used_gold_purchase_id');
    }

    public function sale()
    {
        return $this->belongsTo(Sale::class, 'sale_id');
    }
}
