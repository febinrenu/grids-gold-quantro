<?php

namespace App\Policies\Jewelry;

use App\Policies\JewelryResourcePolicy;

class WarehouseDispatchPolicy extends JewelryResourcePolicy
{
    protected function permissionName(): string
    {
        return 'warehouse_dispatches';
    }
}
