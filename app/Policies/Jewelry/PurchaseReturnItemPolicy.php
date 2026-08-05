<?php

namespace App\Policies\Jewelry;

use App\Policies\JewelryResourcePolicy;

class PurchaseReturnItemPolicy extends JewelryResourcePolicy
{
    protected function permissionName(): string
    {
        return 'purchase_return_items';
    }
}
