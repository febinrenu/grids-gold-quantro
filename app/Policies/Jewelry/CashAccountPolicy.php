<?php

namespace App\Policies\Jewelry;

use App\Policies\JewelryResourcePolicy;

class CashAccountPolicy extends JewelryResourcePolicy
{
    protected function permissionName(): string
    {
        return 'cash_accounts';
    }
}
