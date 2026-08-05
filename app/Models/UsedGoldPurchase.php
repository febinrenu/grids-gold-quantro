<?php

namespace App\Models;

use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Model;

class UsedGoldPurchase extends Model
{
    use SoftDeletes;

    protected $table = 'used_gold_purchases';

    protected $fillable = [
        'purchase_number', 'client_id', 'purchase_date', 'total_weight', 'fine_gold_weight',
        'purchase_value', 'payment_status', 'disposition', 'approved_by',
    ];

    protected $casts = [
        'total_weight' => 'decimal:3',
        'fine_gold_weight' => 'decimal:3',
        'purchase_value' => 'decimal:3',
    ];

    public function client()
    {
        return $this->belongsTo(Client::class, 'client_id');
    }
}
