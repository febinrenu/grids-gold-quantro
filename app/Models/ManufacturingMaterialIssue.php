<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ManufacturingMaterialIssue extends Model
{
    protected $table = 'manufacturing_material_issues';

    protected $fillable = [
        'manufacturing_order_id', 'product_id', 'gold_weight', 'fine_gold_weight', 'issued_by',
        'issue_date',
    ];

    protected $casts = [
        'gold_weight' => 'decimal:3',
        'fine_gold_weight' => 'decimal:3',
    ];

    public function manufacturingOrder()
    {
        return $this->belongsTo(ManufacturingOrder::class, 'manufacturing_order_id');
    }
}
