<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SupplierContact extends Model
{
    protected $table = 'supplier_contacts';

    protected $fillable = [
        'provider_id', 'name', 'designation', 'phone', 'email', 'is_primary_contact',
    ];

    protected $casts = [
        'is_primary_contact' => 'boolean',
    ];

    public function provider()
    {
        return $this->belongsTo(Provider::class, 'provider_id');
    }
}
