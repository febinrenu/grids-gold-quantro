<?php

namespace App\Policies\Jewelry;

use App\Policies\JewelryResourcePolicy;

class ApprovalRequestPolicy extends JewelryResourcePolicy
{
    protected function permissionName(): string
    {
        return 'approval_requests';
    }
}
