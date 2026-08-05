<?php

namespace App\Models;

use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Model;

class JewelryCollection extends Model
{
    use SoftDeletes;

    protected $table = 'jewelry_collections';

    protected $fillable = [
        'name', 'description', 'is_active',
    ];

    protected $casts = [
        'is_active' => 'boolean',
    ];
}
