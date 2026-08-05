<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ApprovalAction extends Model
{
    public $timestamps = false;

    protected $table = 'approval_actions';

    protected $fillable = [
        'approval_request_id', 'level', 'user_id', 'decision', 'remarks', 'decided_at',
    ];

    public function approvalRequest()
    {
        return $this->belongsTo(ApprovalRequest::class, 'approval_request_id');
    }
}
