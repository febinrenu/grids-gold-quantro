<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class RepairItem extends Model
{
    public $timestamps = false;

    protected $table = 'repair_items';

    protected $fillable = [
        'repair_order_id', 'gross_weight', 'stone_weight', 'before_images', 'after_images',
        'damage_notes',
    ];

    protected $casts = [
        'before_images' => 'array',
        'after_images' => 'array',
        'gross_weight' => 'decimal:3',
        'stone_weight' => 'decimal:3',
    ];

    public function repairOrder()
    {
        return $this->belongsTo(RepairOrder::class, 'repair_order_id');
    }
}
