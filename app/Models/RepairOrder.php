<?php

namespace App\Models;

use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Model;

class RepairOrder extends Model
{
    use SoftDeletes;

    protected $table = 'repair_orders';

    protected $fillable = [
        'repair_number', 'client_id', 'product_id', 'is_customer_owned', 'technician_id', 'status',
        'estimated_cost', 'final_cost',
    ];

    protected $casts = [
        'is_customer_owned' => 'boolean',
        'estimated_cost' => 'decimal:2',
        'final_cost' => 'decimal:2',
    ];

    public function client()
    {
        return $this->belongsTo(Client::class, 'client_id');
    }
}
