<?php

namespace App\Models;

use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Model;

class Manufacturer extends Model
{
    use SoftDeletes;

    protected $table = 'manufacturers';

    protected $fillable = [
        'name', 'contact_details', 'address', 'rating', 'is_active',
    ];

    protected $casts = [
        'is_active' => 'boolean',
        'rating' => 'decimal:2',
    ];
}
