<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ManufacturingStoneIssue extends Model
{
    public $timestamps = false;

    protected $table = 'manufacturing_stone_issues';

    protected $fillable = [
        'manufacturing_order_id', 'stone_type_id', 'quantity', 'weight', 'cost',
    ];

    protected $casts = [
        'weight' => 'decimal:3',
        'cost' => 'decimal:2',
    ];

    public function manufacturingOrder()
    {
        return $this->belongsTo(ManufacturingOrder::class, 'manufacturing_order_id');
    }
}
