<?php

namespace App\Policies\Jewelry;

use App\Policies\JewelryResourcePolicy;

class ApprovalActionPolicy extends JewelryResourcePolicy
{
    protected function permissionName(): string
    {
        return 'approval_actions';
    }
}
