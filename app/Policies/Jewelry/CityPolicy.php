<?php

namespace App\Policies\Jewelry;

use App\Policies\JewelryResourcePolicy;

class CityPolicy extends JewelryResourcePolicy
{
    protected function permissionName(): string
    {
        return 'cities';
    }
}
