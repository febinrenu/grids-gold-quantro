<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ManufacturingLoss extends Model
{
    public $timestamps = false;

    protected $table = 'manufacturing_losses';

    protected $fillable = [
        'manufacturing_order_id', 'planned_loss', 'actual_loss', 'loss_percentage', 'approved_by',
        'reason',
    ];

    protected $casts = [
        'planned_loss' => 'decimal:3',
        'actual_loss' => 'decimal:3',
        'loss_percentage' => 'decimal:2',
    ];

    public function manufacturingOrder()
    {
        return $this->belongsTo(ManufacturingOrder::class, 'manufacturing_order_id');
    }
}
