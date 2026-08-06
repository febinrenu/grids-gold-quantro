<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class StockAdjustment extends Model
{
    protected $table = 'stock_adjustments';

    protected $fillable = [
        'adjustment_number', 'product_id', 'warehouse_id', 'adjustment_type', 'old_value',
        'new_value', 'reason', 'approved_by', 'adjustment_date', 'remarks',
    ];
}
