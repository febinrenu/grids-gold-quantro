<?php

namespace App\Policies\Jewelry;

use App\Policies\JewelryResourcePolicy;

class FinancialClosingPolicy extends JewelryResourcePolicy
{
    protected function permissionName(): string
    {
        return 'financial_closings';
    }
}
