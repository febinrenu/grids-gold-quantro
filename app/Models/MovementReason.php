<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class MovementReason extends Model
{
    public $timestamps = false;

    protected $table = 'movement_reasons';

    protected $fillable = [
        'code', 'name', 'is_active',
    ];

    protected $casts = [
        'is_active' => 'boolean',
    ];
}
