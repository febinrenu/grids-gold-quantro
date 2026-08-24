<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CustomOrderRequest extends Model
{
    protected $table = 'custom_order_requests';

    protected $fillable = [
        'client_id', 'quotation_id', 'product_template_id', 'metal_type_id', 'karat_id',
        'target_weight', 'stone_config', 'design_file_path', 'estimated_price',
        'currency_id', 'status', 'notes',
    ];

    protected $casts = [
        'target_weight' => 'decimal:3',
        'stone_config' => 'array',
        'estimated_price' => 'decimal:2',
    ];

    public function client()
    {
        return $this->belongsTo(Client::class, 'client_id');
    }

    public function productTemplate()
    {
        return $this->belongsTo(ProductTemplate::class, 'product_template_id');
    }

    public function quotation()
    {
        return $this->belongsTo(Quotation::class, 'quotation_id');
    }
}
