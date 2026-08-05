<?php

namespace App\Policies\Jewelry;

use App\Policies\JewelryResourcePolicy;

class ManufacturingOrderPolicy extends JewelryResourcePolicy
{
    protected function permissionName(): string
    {
        return 'manufacturing_orders';
    }
}
