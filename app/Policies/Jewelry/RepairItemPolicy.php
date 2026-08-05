<?php

namespace App\Policies\Jewelry;

use App\Policies\JewelryResourcePolicy;

class RepairItemPolicy extends JewelryResourcePolicy
{
    protected function permissionName(): string
    {
        return 'repair_items';
    }
}
