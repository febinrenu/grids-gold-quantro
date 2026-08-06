<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ManufacturingDust extends Model
{
    public $timestamps = false;

    protected $table = 'manufacturing_dust';

    protected $fillable = [
        'manufacturing_order_id', 'dust_weight', 'estimated_fine_gold', 'recovery_date',
        'refinery_reference',
    ];

    protected $casts = [
        'dust_weight' => 'decimal:4',
        'estimated_fine_gold' => 'decimal:4',
    ];

    public function manufacturingOrder()
    {
        return $this->belongsTo(ManufacturingOrder::class, 'manufacturing_order_id');
    }
}
