<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ManufacturingOrderStage extends Model
{
    protected $table = 'manufacturing_order_stages';

    protected $fillable = [
        'manufacturing_order_id', 'stage_name', 'sequence', 'status',
        'assigned_employee_id', 'started_at', 'completed_at', 'notes'
    ];

    protected $casts = [
        'manufacturing_order_id' => 'integer',
        'assigned_employee_id' => 'integer',
        'started_at' => 'datetime',
        'completed_at' => 'datetime',
    ];

    public function manufacturingOrder()
    {
        return $this->belongsTo(ManufacturingOrder::class, 'manufacturing_order_id');
    }

    public function employee()
    {
        return $this->belongsTo(Employee::class, 'assigned_employee_id');
    }

    public function timeLogs()
    {
        return $this->hasMany(ManufacturingTimeLog::class, 'manufacturing_order_stage_id');
    }
}
