<?php

namespace App\Policies\Jewelry;

use App\Policies\JewelryResourcePolicy;

class GoldExchangeTransactionPolicy extends JewelryResourcePolicy
{
    protected function permissionName(): string
    {
        return 'gold_exchange_transactions';
    }
}
