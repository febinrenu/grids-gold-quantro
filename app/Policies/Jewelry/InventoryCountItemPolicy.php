<?php

namespace App\Policies\Jewelry;

use App\Policies\JewelryResourcePolicy;

class InventoryCountItemPolicy extends JewelryResourcePolicy
{
    protected function permissionName(): string
    {
        return 'inventory_count_items';
    }
}
