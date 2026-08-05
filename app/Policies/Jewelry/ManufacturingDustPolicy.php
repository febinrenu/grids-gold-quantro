<?php

namespace App\Policies\Jewelry;

use App\Policies\JewelryResourcePolicy;

class ManufacturingDustPolicy extends JewelryResourcePolicy
{
    protected function permissionName(): string
    {
        return 'manufacturing_dust';
    }
}
