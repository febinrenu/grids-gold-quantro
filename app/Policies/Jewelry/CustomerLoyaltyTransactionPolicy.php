<?php

namespace App\Policies\Jewelry;

use App\Policies\JewelryResourcePolicy;

class CustomerLoyaltyTransactionPolicy extends JewelryResourcePolicy
{
    protected function permissionName(): string
    {
        return 'customer_loyalty_transactions';
    }
}
