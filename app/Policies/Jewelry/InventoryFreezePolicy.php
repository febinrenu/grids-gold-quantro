<?php

namespace App\Policies\Jewelry;

use App\Policies\JewelryResourcePolicy;

class InventoryFreezePolicy extends JewelryResourcePolicy
{
    protected function permissionName(): string
    {
        return 'inventory_freezes';
    }
}
