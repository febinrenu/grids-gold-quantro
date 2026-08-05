<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ScheduledJob extends Model
{
    public $timestamps = false;

    protected $table = 'scheduled_jobs';

    protected $fillable = [
        'job_name', 'frequency', 'last_run_at', 'next_run_at', 'status',
    ];
}
