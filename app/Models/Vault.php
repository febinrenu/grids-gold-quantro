<?php

namespace App\Models;

use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Model;

class Vault extends Model
{
    use SoftDeletes;

    protected $table = 'vaults';

    protected $fillable = [
        'warehouse_id', 'vault_code', 'vault_name', 'maximum_capacity', 'security_level',
        'access_policy', 'status',
    ];

    protected $casts = [
        'maximum_capacity' => 'decimal:3',
    ];

    public function warehouse()
    {
        return $this->belongsTo(Warehouse::class, 'warehouse_id');
    }
}
