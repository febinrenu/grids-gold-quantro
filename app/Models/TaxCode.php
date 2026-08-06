<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TaxCode extends Model
{
    public $timestamps = false;

    protected $table = 'tax_codes';

    protected $fillable = [
        'code', 'name', 'rate', 'type', 'effective_date', 'is_active',
    ];

    protected $casts = [
        'is_active' => 'boolean',
        'rate' => 'decimal:2',
    ];
}
