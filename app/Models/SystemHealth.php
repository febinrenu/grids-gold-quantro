<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SystemHealth extends Model
{
    public $timestamps = false;

    protected $table = 'system_health';

    protected $fillable = [
        'metric', 'value', 'unit', 'recorded_at',
    ];

    protected $casts = [
        'value' => 'decimal:2',
    ];
}
