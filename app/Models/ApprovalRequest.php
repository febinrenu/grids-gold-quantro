<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ApprovalRequest extends Model
{
    protected $table = 'approval_requests';

    protected $fillable = [
        'request_number', 'approval_workflow_id', 'module', 'reference_type', 'reference_id',
        'current_level', 'status',
    ];

    public function approvalWorkflow()
    {
        return $this->belongsTo(ApprovalWorkflow::class, 'approval_workflow_id');
    }
}
