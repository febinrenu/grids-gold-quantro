<?php
// Task 1.6

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Karat extends Model
{
    protected $fillable = [
        'metal_type_id', 'name', 'purity_percentage', 'fineness', 'tolerance', 'is_active',
    ];

    protected $casts = [
        'is_active' => 'boolean',
        'purity_percentage' => 'decimal:2',
        'fineness' => 'decimal:3',
        'tolerance' => 'decimal:2',
    ];

    public function metalType()
    {
        return $this->belongsTo(MetalType::class);
    }
}
