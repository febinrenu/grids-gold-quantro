<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ManufacturingTimeLog extends Model
{
    protected $table = 'manufacturing_time_logs';

    protected $fillable = [
        'manufacturing_order_id', 'manufacturing_order_stage_id', 'employee_id',
        'started_at', 'ended_at', 'duration_seconds', 'labor_cost'
    ];

    protected $casts = [
        'manufacturing_order_id' => 'integer',
        'manufacturing_order_stage_id' => 'integer',
        'employee_id' => 'integer',
        'started_at' => 'datetime',
        'ended_at' => 'datetime',
        'duration_seconds' => 'integer',
        'labor_cost' => 'double',
    ];

    public function manufacturingOrder()
    {
        return $this->belongsTo(ManufacturingOrder::class, 'manufacturing_order_id');
    }

    public function stage()
    {
        return $this->belongsTo(ManufacturingOrderStage::class, 'manufacturing_order_stage_id');
    }

    public function employee()
    {
        return $this->belongsTo(Employee::class, 'employee_id');
    }
}
