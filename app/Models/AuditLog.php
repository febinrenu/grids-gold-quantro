<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AuditLog extends Model
{
    const UPDATED_AT = null;

    protected $fillable = [
        'auditable_type', 'auditable_id', 'action', 'old_values', 'new_values', 'user_id',
    ];

    protected $casts = [
        'auditable_id' => 'integer',
        'old_values' => 'array',
        'new_values' => 'array',
        'user_id' => 'integer',
        'created_at' => 'datetime',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
