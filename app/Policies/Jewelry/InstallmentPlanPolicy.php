<?php

namespace App\Policies\Jewelry;

use App\Policies\JewelryResourcePolicy;

class InstallmentPlanPolicy extends JewelryResourcePolicy
{
    protected function permissionName(): string
    {
        return 'installment_plans';
    }
}
