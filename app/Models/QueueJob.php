<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class QueueJob extends Model
{
    public $timestamps = false;

    protected $table = 'queue_jobs';

    protected $fillable = [
        'queue', 'job_type', 'payload', 'attempts', 'reserved_at', 'available_at',
    ];

    protected $casts = [
        'payload' => 'array',
    ];
}
