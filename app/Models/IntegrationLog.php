<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class IntegrationLog extends Model
{
    public $timestamps = false;

    protected $table = 'integration_logs';

    protected $fillable = [
        'integration_endpoint_id', 'request_payload', 'response_payload', 'status_code',
        'duration_ms', 'retry_count', 'error_message',
    ];

    protected $casts = [
        'request_payload' => 'array',
        'response_payload' => 'array',
    ];

    public function integrationEndpoint()
    {
        return $this->belongsTo(IntegrationEndpoint::class, 'integration_endpoint_id');
    }
}
