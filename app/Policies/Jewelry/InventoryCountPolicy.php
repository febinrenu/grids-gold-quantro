<?php

namespace App\Policies\Jewelry;

use App\Policies\JewelryResourcePolicy;

class InventoryCountPolicy extends JewelryResourcePolicy
{
    protected function permissionName(): string
    {
        return 'inventory_counts';
    }
}
