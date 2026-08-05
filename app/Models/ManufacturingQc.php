<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ManufacturingQc extends Model
{
    public $timestamps = false;

    protected $table = 'manufacturing_qc';

    protected $fillable = [
        'manufacturing_order_id', 'checks', 'result', 'inspected_by', 'inspected_at',
    ];

    protected $casts = [
        'checks' => 'array',
    ];

    public function manufacturingOrder()
    {
        return $this->belongsTo(ManufacturingOrder::class, 'manufacturing_order_id');
    }
}
