<?php

namespace App\Policies\Jewelry;

use App\Policies\JewelryResourcePolicy;

class GoldBalancePolicy extends JewelryResourcePolicy
{
    protected function permissionName(): string
    {
        return 'gold_balances';
    }
}
