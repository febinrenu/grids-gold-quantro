<?php
// Task 1.6

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class MetalType extends Model
{
    protected $fillable = ['name', 'code', 'density', 'is_active', 'requires_purity'];

    protected $casts = [
        'is_active' => 'boolean',
        'density' => 'decimal:3',
        'requires_purity' => 'boolean',
    ];

    public function karats()
    {
        return $this->hasMany(Karat::class);
    }
}
