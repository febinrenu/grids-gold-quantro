<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PurchaseRequestItem extends Model
{
    public $timestamps = false;

    protected $table = 'purchase_request_items';

    protected $fillable = [
        'purchase_request_id', 'product_template_id', 'quantity', 'estimated_weight',
        'estimated_cost', 'remarks',
    ];

    protected $casts = [
        'quantity' => 'decimal:3',
        'estimated_weight' => 'decimal:3',
        'estimated_cost' => 'decimal:3',
    ];

    public function purchaseRequest()
    {
        return $this->belongsTo(PurchaseRequest::class, 'purchase_request_id');
    }
}
