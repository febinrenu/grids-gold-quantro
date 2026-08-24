<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class ConsignmentSettlement extends Model
{
    use SoftDeletes;

    protected $table = 'consignment_settlements';

    protected $fillable = [
        'product_id', 'sale_id', 'sale_detail_id', 'ownership_type', 'owner_type',
        'owner_reference_id', 'settlement_type', 'quantity', 'unit_cost', 'total_owed',
        'currency_id', 'status', 'settled_at', 'settled_by', 'notes',
    ];

    protected $casts = [
        'quantity' => 'decimal:2',
        'unit_cost' => 'decimal:2',
        'total_owed' => 'decimal:2',
        'settled_at' => 'datetime',
    ];

    public function product()
    {
        return $this->belongsTo(Product::class, 'product_id');
    }

    public function sale()
    {
        return $this->belongsTo(Sale::class, 'sale_id');
    }
}
