<?php

namespace App\Policies\Jewelry;

use App\Policies\JewelryResourcePolicy;

class ApprovalWorkflowPolicy extends JewelryResourcePolicy
{
    protected function permissionName(): string
    {
        return 'approval_workflows';
    }
}
