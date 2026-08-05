<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class WarehouseDispatch extends Model
{
    protected $table = 'warehouse_dispatches';

    protected $fillable = [
        'dispatch_number', 'warehouse_id', 'source_type', 'source_id', 'dispatched_by',
        'dispatched_at',
    ];
}
