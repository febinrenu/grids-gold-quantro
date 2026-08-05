<?php

namespace App\Policies\Jewelry;

use App\Policies\JewelryResourcePolicy;

class HallmarkPolicy extends JewelryResourcePolicy
{
    protected function permissionName(): string
    {
        return 'hallmarks';
    }
}
