<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Transfer extends Model
{
    protected $table = 'transfers';

    protected $dates = ['deleted_at'];

    protected $fillable = [
        'id', 'date', 'user_id', 'from_warehouse_id', 'to_warehouse_id', 'time',
        'from_warehouse_location_id', 'to_warehouse_location_id',
        'items', 'statut', 'approval_status', 'notes', 'GrandTotal', 'discount', 'shipping', 'TaxNet', 'tax_rate',
        'created_at', 'updated_at', 'deleted_at',
    ];

    protected $casts = [
        'user_id' => 'integer',
        'from_warehouse_id' => 'integer',
        'to_warehouse_id' => 'integer',
        'from_warehouse_location_id' => 'integer',
        'to_warehouse_location_id' => 'integer',
        'items' => 'double',
        'GrandTotal' => 'double',
        'discount' => 'double',
        'shipping' => 'double',
        'TaxNet' => 'double',
        'tax_rate' => 'double',

    ];

    public function user()
    {
        return $this->belongsTo('App\Models\User');
    }

    public function details()
    {
        return $this->hasMany('App\Models\TransferDetail');
    }

    public function transferItems()
    {
        return $this->hasMany('App\Models\TransferItem', 'transfer_id');
    }

    public function from_warehouse()
    {
        return $this->belongsTo('App\Models\Warehouse', 'from_warehouse_id');
    }

    public function to_warehouse()
    {
        return $this->belongsTo('App\Models\Warehouse', 'to_warehouse_id');
    }

    public function fromWarehouseLocation()
    {
        return $this->belongsTo('App\Models\WarehouseLocation', 'from_warehouse_location_id');
    }

    public function toWarehouseLocation()
    {
        return $this->belongsTo('App\Models\WarehouseLocation', 'to_warehouse_location_id');
    }

    /**
     * Accessor to ensure OLD TRANSFERS SAFETY:
     * any existing row with a NULL approval_status is treated as "approved".
     */
    public function getApprovalStatusAttribute($value)
    {
        if ($value === null) {
            return 'approved';
        }

        return $value;
    }

    /**
     * Convenience helper for business logic.
     */
    public function isApproved()
    {
        return $this->approval_status === 'approved';
    }
}
