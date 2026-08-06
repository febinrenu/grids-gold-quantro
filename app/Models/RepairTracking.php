<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class RepairTracking extends Model
{
    public $timestamps = false;

    protected $table = 'repair_tracking';

    protected $fillable = [
        'repair_order_id', 'stage', 'changed_by', 'changed_at', 'remarks',
    ];

    public function repairOrder()
    {
        return $this->belongsTo(RepairOrder::class, 'repair_order_id');
    }
}
