<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class NotificationTemplate extends Model
{
    protected $table = 'notification_templates';

    protected $fillable = [
        'code', 'name', 'channel', 'subject', 'body', 'is_active',
    ];

    protected $casts = [
        'is_active' => 'boolean',
    ];
}
