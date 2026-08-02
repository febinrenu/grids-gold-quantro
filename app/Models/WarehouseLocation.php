<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class WarehouseLocation extends Model
{
    use SoftDeletes;

    protected $table = 'warehouse_locations';

    protected $fillable = [
        'warehouse_id',
        'code',
        'name',
        'is_active',
        'is_restricted',
    ];

    protected $casts = [
        'warehouse_id' => 'integer',
        'is_active' => 'boolean',
        'is_restricted' => 'boolean',
    ];

    public function warehouse()
    {
        return $this->belongsTo(Warehouse::class);
    }
}

