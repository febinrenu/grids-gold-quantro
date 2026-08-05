<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ApiToken extends Model
{
    protected $table = 'api_tokens';

    protected $fillable = [
        'token_name', 'owner_user_id', 'token_hash', 'abilities', 'expires_at', 'last_used_at',
    ];

    protected $casts = [
        'abilities' => 'array',
    ];
}
