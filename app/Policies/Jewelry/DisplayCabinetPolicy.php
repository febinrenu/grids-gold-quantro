<?php

namespace App\Policies\Jewelry;

use App\Policies\JewelryResourcePolicy;

class DisplayCabinetPolicy extends JewelryResourcePolicy
{
    protected function permissionName(): string
    {
        return 'display_cabinets';
    }
}
