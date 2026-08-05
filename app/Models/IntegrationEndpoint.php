<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class IntegrationEndpoint extends Model
{
    protected $table = 'integration_endpoints';

    protected $fillable = [
        'name', 'base_url', 'authentication_type', 'timeout_seconds', 'retry_count', 'status',
    ];
}
