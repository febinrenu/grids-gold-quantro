<?php

namespace App\Models;

use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Model;

class ProductTemplate extends Model
{
    use SoftDeletes;

    protected $table = 'product_templates';

    protected $fillable = [
        'category_id', 'template_code', 'template_name', 'design_id', 'brand_id',
        'manufacturer_id', 'collection_id', 'default_karat_id', 'default_metal_type_id',
        'default_making_charge', 'warranty_months', 'description', 'is_active',
    ];

    protected $casts = [
        'is_active' => 'boolean',
        'default_making_charge' => 'decimal:2',
    ];

    public function design()
    {
        return $this->belongsTo(ProductDesign::class, 'design_id');
    }

    public function collection()
    {
        return $this->belongsTo(JewelryCollection::class, 'collection_id');
    }

    public function manufacturer()
    {
        return $this->belongsTo(Manufacturer::class, 'manufacturer_id');
    }
}
