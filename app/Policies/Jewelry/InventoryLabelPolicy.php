<?php

namespace App\Policies\Jewelry;

use App\Policies\JewelryResourcePolicy;

class InventoryLabelPolicy extends JewelryResourcePolicy
{
    protected function permissionName(): string
    {
        return 'inventory_labels';
    }
}
