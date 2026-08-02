<?php
// Task 1.5 — matches the exact class body given in the per-person task
// breakdown §1.5.

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ItemStone extends Model
{
    protected $fillable = [
        'product_id', 'stone_type_id', 'stone_name', 'quantity', 'carat_value',
        'color', 'clarity', 'cut', 'shape', 'certificate_number',
        'unit_cost_amount', 'total_cost_amount', 'notes',
    ];

    protected $casts = [
        'quantity' => 'integer',
        'carat_value' => 'decimal:3',
        'unit_cost_amount' => 'decimal:2',
        'total_cost_amount' => 'decimal:2',
    ];

    public function product()
    {
        return $this->belongsTo(Product::class);
    }

    public function stoneType()
    {
        return $this->belongsTo(StoneType::class);
    }
}
