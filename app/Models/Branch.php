<?php

namespace App\Models;

use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Model;

class Branch extends Model
{
    use SoftDeletes;

    protected $table = 'branches';

    protected $fillable = [
        'company_id', 'branch_code', 'branch_name', 'manager_id', 'email', 'phone', 'address',
        'city', 'latitude', 'longitude', 'gold_price_override', 'default_currency_id', 'status',
    ];

    protected $casts = [
        'gold_price_override' => 'boolean',
        'latitude' => 'decimal:6',
        'longitude' => 'decimal:6',
    ];

    public function company()
    {
        return $this->belongsTo(Company::class, 'company_id');
    }
}
