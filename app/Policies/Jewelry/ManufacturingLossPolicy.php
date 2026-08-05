<?php

namespace App\Policies\Jewelry;

use App\Policies\JewelryResourcePolicy;

class ManufacturingLossPolicy extends JewelryResourcePolicy
{
    protected function permissionName(): string
    {
        return 'manufacturing_losses';
    }
}
