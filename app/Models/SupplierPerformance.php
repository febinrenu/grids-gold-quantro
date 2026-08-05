<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SupplierPerformance extends Model
{
    protected $table = 'supplier_performance';

    protected $fillable = [
        'provider_id', 'on_time_delivery_pct', 'quality_rating', 'price_competitiveness',
        'return_rate_pct', 'average_lead_time_days', 'order_fulfillment_pct', 'total_purchases',
        'last_purchase_date',
    ];

    protected $casts = [
        'on_time_delivery_pct' => 'decimal:2',
        'quality_rating' => 'decimal:2',
        'price_competitiveness' => 'decimal:2',
        'return_rate_pct' => 'decimal:2',
        'average_lead_time_days' => 'decimal:2',
        'order_fulfillment_pct' => 'decimal:2',
        'total_purchases' => 'decimal:3',
    ];

    public function provider()
    {
        return $this->belongsTo(Provider::class, 'provider_id');
    }
}
