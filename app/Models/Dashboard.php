<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Dashboard extends Model
{
    public $timestamps = false;

    protected $table = 'dashboards';

    protected $fillable = [
        'name', 'role_id', 'layout', 'is_default',
    ];

    protected $casts = [
        'layout' => 'array',
        'is_default' => 'boolean',
    ];
}
