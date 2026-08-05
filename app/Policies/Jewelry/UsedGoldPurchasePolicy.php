<?php

namespace App\Policies\Jewelry;

use App\Policies\JewelryResourcePolicy;

class UsedGoldPurchasePolicy extends JewelryResourcePolicy
{
    protected function permissionName(): string
    {
        return 'used_gold_purchases';
    }
}
