<?php

namespace App\Policies\Jewelry;

use App\Policies\JewelryResourcePolicy;

class LandedCostAllocationPolicy extends JewelryResourcePolicy
{
    protected function permissionName(): string
    {
        return 'landed_cost_allocations';
    }
}
