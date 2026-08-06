<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class InventoryReconciliation extends Model
{
    protected $table = 'inventory_reconciliations';

    protected $fillable = [
        'reconciliation_number', 'inventory_count_id', 'approved_by', 'adjustment_generated',
        'completion_date',
    ];

    protected $casts = [
        'adjustment_generated' => 'boolean',
    ];

    public function inventoryCount()
    {
        return $this->belongsTo(InventoryCount::class, 'inventory_count_id');
    }
}
