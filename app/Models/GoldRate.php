<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class GoldRate extends Model
{
    protected $fillable = [
        'warehouse_id',
        'metal_type_id',
        'karat_id',
        'currency_id',
        'rate_per_weight_unit',
        'weight_uom',
        'rate_source',
        'effective_at',
        'expires_at',
        'status',
        'created_by',
    ];

    protected $casts = [
        'effective_at' => 'datetime',
        'expires_at' => 'datetime',
        'rate_per_weight_unit' => 'decimal:2',
    ];

    public function metalType()
    {
        return $this->belongsTo(MetalType::class);
    }

    public function karat()
    {
        return $this->belongsTo(Karat::class);
    }

    public function warehouse()
    {
        return $this->belongsTo(Warehouse::class);
    }

    public function currency()
    {
        return $this->belongsTo(Currency::class);
    }
}
