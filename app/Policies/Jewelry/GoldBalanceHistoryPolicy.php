<?php

namespace App\Policies\Jewelry;

use App\Policies\JewelryResourcePolicy;

class GoldBalanceHistoryPolicy extends JewelryResourcePolicy
{
    protected function permissionName(): string
    {
        return 'gold_balance_history';
    }
}
