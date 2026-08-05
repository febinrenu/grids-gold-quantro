<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ManufacturingScrap extends Model
{
    public $timestamps = false;

    protected $table = 'manufacturing_scrap';

    protected $fillable = [
        'manufacturing_order_id', 'metal_type_id', 'weight', 'fine_gold_weight', 'recovery_status',
    ];

    protected $casts = [
        'weight' => 'decimal:3',
        'fine_gold_weight' => 'decimal:3',
    ];

    public function manufacturingOrder()
    {
        return $this->belongsTo(ManufacturingOrder::class, 'manufacturing_order_id');
    }
}
