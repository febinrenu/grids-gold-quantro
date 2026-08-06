<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class InventoryVariance extends Model
{
    protected $table = 'inventory_variances';

    protected $fillable = [
        'variance_number', 'product_id', 'expected_value', 'actual_value', 'difference',
        'severity', 'resolution_status',
    ];
}
