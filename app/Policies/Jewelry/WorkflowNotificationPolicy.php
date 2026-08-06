<?php

namespace App\Policies\Jewelry;

use App\Policies\JewelryResourcePolicy;

class WorkflowNotificationPolicy extends JewelryResourcePolicy
{
    protected function permissionName(): string
    {
        return 'workflow_notifications';
    }
}
