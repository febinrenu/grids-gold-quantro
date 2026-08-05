<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class LandedCostAllocation extends Model
{
    protected $table = 'landed_cost_allocations';

    protected $fillable = [
        'allocation_number', 'purchase_id', 'cost_type', 'total_cost', 'allocation_method',
    ];

    protected $casts = [
        'total_cost' => 'decimal:3',
    ];

    public function purchase()
    {
        return $this->belongsTo(Purchase::class, 'purchase_id');
    }
}
