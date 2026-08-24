<?php

namespace App\Models;

use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Model;

class ManufacturingOrder extends Model
{
    use SoftDeletes;

    protected $table = 'manufacturing_orders';

    protected $fillable = [
        'manufacturing_number', 'branch_id', 'warehouse_id', 'workshop_id', 'product_template_id',
        'design_id', 'planned_quantity', 'completed_quantity', 'planned_gold_weight',
        'planned_fine_gold', 'estimated_stone_weight', 'order_date', 'expected_completion',
        'status', 'quotation_id', 'product_id',
    ];

    protected $casts = [
        'planned_gold_weight' => 'decimal:3',
        'planned_fine_gold' => 'decimal:3',
        'estimated_stone_weight' => 'decimal:3',
        'quotation_id' => 'integer',
        'product_id' => 'integer',
    ];

    public function workshop()
    {
        return $this->belongsTo(Workshop::class, 'workshop_id');
    }

    public function quotation()
    {
        return $this->belongsTo(Quotation::class, 'quotation_id');
    }

    public function product()
    {
        return $this->belongsTo(Product::class, 'product_id');
    }
}
