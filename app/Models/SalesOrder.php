<?php

namespace App\Models;

use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Model;

class SalesOrder extends Model
{
    use SoftDeletes;

    protected $table = 'sales_orders';

    protected $fillable = [
        'sales_order_number', 'client_id', 'warehouse_id', 'order_date', 'expected_delivery',
        'status',
    ];
}
