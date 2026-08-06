<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class MovementType extends Model
{
    public $timestamps = false;

    protected $table = 'movement_types';

    protected $fillable = [
        'code', 'name', 'is_active',
    ];

    protected $casts = [
        'is_active' => 'boolean',
    ];
}
