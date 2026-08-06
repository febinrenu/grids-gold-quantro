<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class RepairPart extends Model
{
    public $timestamps = false;

    protected $table = 'repair_parts';

    protected $fillable = [
        'repair_order_id', 'part_type', 'description', 'cost',
    ];

    protected $casts = [
        'cost' => 'decimal:2',
    ];

    public function repairOrder()
    {
        return $this->belongsTo(RepairOrder::class, 'repair_order_id');
    }
}
