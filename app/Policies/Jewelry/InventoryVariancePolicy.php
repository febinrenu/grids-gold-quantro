<?php

namespace App\Policies\Jewelry;

use App\Policies\JewelryResourcePolicy;

class InventoryVariancePolicy extends JewelryResourcePolicy
{
    protected function permissionName(): string
    {
        return 'inventory_variances';
    }
}
