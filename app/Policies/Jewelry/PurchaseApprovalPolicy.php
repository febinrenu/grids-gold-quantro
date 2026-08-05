<?php

namespace App\Policies\Jewelry;

use App\Policies\JewelryResourcePolicy;

class PurchaseApprovalPolicy extends JewelryResourcePolicy
{
    protected function permissionName(): string
    {
        return 'purchase_approvals';
    }
}
