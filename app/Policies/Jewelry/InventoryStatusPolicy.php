<?php

namespace App\Policies\Jewelry;

use App\Policies\JewelryResourcePolicy;

class InventoryStatusPolicy extends JewelryResourcePolicy
{
    protected function permissionName(): string
    {
        return 'inventory_statuses';
    }
}
