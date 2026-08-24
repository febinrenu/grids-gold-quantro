<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ScaleReading extends Model
{
    protected $table = 'scale_readings';

    protected $fillable = [
        'product_id', 'warehouse_id', 'weight_grams', 'context',
        'captured_by', 'captured_at', 'raw_payload',
    ];

    protected $casts = [
        'weight_grams' => 'decimal:3',
        'captured_at' => 'datetime',
        'raw_payload' => 'array',
    ];

    public function product()
    {
        return $this->belongsTo(Product::class, 'product_id');
    }
}
