<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ApprovalWorkflow extends Model
{
    protected $table = 'approval_workflows';

    protected $fillable = [
        'workflow_name', 'module', 'trigger_condition', 'approval_levels', 'is_active',
    ];

    protected $casts = [
        'is_active' => 'boolean',
    ];
}
