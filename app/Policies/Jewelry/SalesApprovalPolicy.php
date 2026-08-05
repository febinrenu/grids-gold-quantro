<?php

namespace App\Policies\Jewelry;

use App\Policies\JewelryResourcePolicy;

class SalesApprovalPolicy extends JewelryResourcePolicy
{
    protected function permissionName(): string
    {
        return 'sales_approvals';
    }
}
