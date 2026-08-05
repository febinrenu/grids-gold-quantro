<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class OwnershipType extends Model
{
    public $timestamps = false;

    protected $table = 'ownership_types';

    protected $fillable = [
        'code', 'name', 'is_active',
    ];

    protected $casts = [
        'is_active' => 'boolean',
    ];
}
