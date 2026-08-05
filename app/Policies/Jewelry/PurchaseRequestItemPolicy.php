<?php

namespace App\Policies\Jewelry;

use App\Policies\JewelryResourcePolicy;

class PurchaseRequestItemPolicy extends JewelryResourcePolicy
{
    protected function permissionName(): string
    {
        return 'purchase_request_items';
    }
}
