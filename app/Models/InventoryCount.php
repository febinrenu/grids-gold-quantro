<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class InventoryCount extends Model
{
    protected $table = 'inventory_counts';

    protected $fillable = [
        'count_number', 'warehouse_id', 'count_date', 'count_type', 'started_by', 'completed_by',
        'status',
    ];
}
