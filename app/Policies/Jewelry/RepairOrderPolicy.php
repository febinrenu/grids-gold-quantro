<?php

namespace App\Policies\Jewelry;

use App\Policies\JewelryResourcePolicy;

class RepairOrderPolicy extends JewelryResourcePolicy
{
    protected function permissionName(): string
    {
        return 'repair_orders';
    }
}
