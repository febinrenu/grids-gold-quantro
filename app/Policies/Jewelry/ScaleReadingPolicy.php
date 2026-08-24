<?php

namespace App\Policies\Jewelry;

use App\Policies\JewelryResourcePolicy;

class ScaleReadingPolicy extends JewelryResourcePolicy
{
    protected function permissionName(): string
    {
        return 'scale_readings';
    }
}
