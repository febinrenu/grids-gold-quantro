<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UsedGoldPurchaseItem extends Model
{
    public $timestamps = false;

    protected $table = 'used_gold_purchase_items';

    protected $fillable = [
        'used_gold_purchase_id', 'gross_weight', 'stone_weight', 'net_weight', 'purity_percentage',
        'fine_gold_weight', 'purchase_rate',
    ];

    protected $casts = [
        'gross_weight' => 'decimal:3',
        'stone_weight' => 'decimal:3',
        'net_weight' => 'decimal:3',
        'purity_percentage' => 'decimal:2',
        'fine_gold_weight' => 'decimal:3',
        'purchase_rate' => 'decimal:2',
    ];

    public function usedGoldPurchase()
    {
        return $this->belongsTo(UsedGoldPurchase::class, 'used_gold_purchase_id');
    }
}
