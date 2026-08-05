<?php

namespace App\Policies\Jewelry;

use App\Policies\JewelryResourcePolicy;

class UsedGoldPurchaseItemPolicy extends JewelryResourcePolicy
{
    protected function permissionName(): string
    {
        return 'used_gold_purchase_items';
    }
}
