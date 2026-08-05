<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class WorkshopSettlement extends Model
{
    protected $table = 'workshop_settlements';

    protected $fillable = [
        'workshop_id', 'manufacturing_order_id', 'labour_charges', 'making_charges',
        'gold_settlement_weight', 'stone_settlement_amount', 'status',
    ];

    protected $casts = [
        'labour_charges' => 'decimal:2',
        'making_charges' => 'decimal:2',
        'gold_settlement_weight' => 'decimal:3',
        'stone_settlement_amount' => 'decimal:2',
    ];

    public function workshop()
    {
        return $this->belongsTo(Workshop::class, 'workshop_id');
    }
}
