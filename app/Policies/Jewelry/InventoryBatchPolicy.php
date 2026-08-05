<?php

namespace App\Policies\Jewelry;

use App\Policies\JewelryResourcePolicy;

class InventoryBatchPolicy extends JewelryResourcePolicy
{
    protected function permissionName(): string
    {
        return 'inventory_batches';
    }
}
