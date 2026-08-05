<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class InventoryStatus extends Model
{
    public $timestamps = false;

    protected $table = 'inventory_statuses';

    protected $fillable = [
        'code', 'name', 'is_active',
    ];

    protected $casts = [
        'is_active' => 'boolean',
    ];
}
