<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SalesReturnItem extends Model
{
    public $timestamps = false;

    protected $table = 'sales_return_items';

    protected $fillable = [
        'sales_return_id', 'product_id', 'return_weight', 'return_value', 'condition',
        'refund_amount',
    ];

    protected $casts = [
        'return_weight' => 'decimal:3',
        'return_value' => 'decimal:3',
        'refund_amount' => 'decimal:3',
    ];

    public function salesReturn()
    {
        return $this->belongsTo(SalesReturn::class, 'sales_return_id');
    }
}
