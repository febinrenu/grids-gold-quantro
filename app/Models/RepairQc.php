<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class RepairQc extends Model
{
    public $timestamps = false;

    protected $table = 'repair_qc';

    protected $fillable = [
        'repair_order_id', 'repair_quality', 'weight_difference', 'stone_count_verified',
        'customer_notes',
    ];

    protected $casts = [
        'stone_count_verified' => 'boolean',
        'weight_difference' => 'decimal:3',
    ];

    public function repairOrder()
    {
        return $this->belongsTo(RepairOrder::class, 'repair_order_id');
    }
}
