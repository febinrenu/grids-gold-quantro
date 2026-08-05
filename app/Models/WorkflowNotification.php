<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class WorkflowNotification extends Model
{
    protected $table = 'workflow_notifications';

    protected $fillable = [
        'notification_template_id', 'user_id', 'type', 'channel', 'title', 'body', 'data',
        'read_at', 'sent_at',
    ];

    protected $casts = [
        'data' => 'array',
    ];

    public function notificationTemplate()
    {
        return $this->belongsTo(NotificationTemplate::class, 'notification_template_id');
    }
}
