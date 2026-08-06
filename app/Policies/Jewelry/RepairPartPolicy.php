<?php

namespace App\Policies\Jewelry;

use App\Policies\JewelryResourcePolicy;

class RepairPartPolicy extends JewelryResourcePolicy
{
    protected function permissionName(): string
    {
        return 'repair_parts';
    }
}
