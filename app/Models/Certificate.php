<?php

namespace App\Models;

use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Model;

class Certificate extends Model
{
    use SoftDeletes;

    protected $table = 'certificates';

    protected $fillable = [
        'authority_name', 'website', 'is_active',
    ];

    protected $casts = [
        'is_active' => 'boolean',
    ];
}
