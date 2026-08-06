<?php

namespace App\Policies\Jewelry;

use App\Policies\JewelryResourcePolicy;

class PurchaseRequestPolicy extends JewelryResourcePolicy
{
    protected function permissionName(): string
    {
        return 'purchase_requests';
    }
}
