<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class QueueFailure extends Model
{
    public $timestamps = false;

    protected $table = 'queue_failures';

    protected $fillable = [
        'queue_job_id', 'job_type', 'payload', 'exception', 'failed_at',
    ];

    protected $casts = [
        'payload' => 'array',
    ];
}
