<?php

namespace App\Models;

use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Model;

class Workshop extends Model
{
    use SoftDeletes;

    protected $table = 'workshops';

    protected $fillable = [
        'workshop_code', 'name', 'type', 'address', 'contact', 'rating', 'is_active',
    ];

    protected $casts = [
        'is_active' => 'boolean',
        'rating' => 'decimal:2',
    ];
}
