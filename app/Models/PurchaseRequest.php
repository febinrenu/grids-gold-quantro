<?php

namespace App\Models;

use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Model;

class PurchaseRequest extends Model
{
    use SoftDeletes;

    protected $table = 'purchase_requests';

    protected $fillable = [
        'request_number', 'warehouse_id', 'requested_by', 'department_id', 'priority', 'status',
        'expected_date', 'remarks',
    ];
}
