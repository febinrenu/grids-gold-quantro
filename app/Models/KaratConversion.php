<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class KaratConversion extends Model
{
    public $timestamps = false;

    protected $table = 'karat_conversions';

    protected $fillable = [
        'product_id', 'original_weight', 'original_karat_id', 'new_weight', 'new_karat_id',
        'converted_by', 'converted_at',
    ];

    protected $casts = [
        'original_weight' => 'decimal:3',
        'new_weight' => 'decimal:3',
    ];
}
