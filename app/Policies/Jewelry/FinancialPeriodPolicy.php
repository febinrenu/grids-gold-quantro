<?php

namespace App\Policies\Jewelry;

use App\Policies\JewelryResourcePolicy;

class FinancialPeriodPolicy extends JewelryResourcePolicy
{
    protected function permissionName(): string
    {
        return 'financial_periods';
    }
}
