<?php

namespace App\Policies\Jewelry;

use App\Policies\JewelryResourcePolicy;

class SystemHealthPolicy extends JewelryResourcePolicy
{
    protected function permissionName(): string
    {
        return 'system_health';
    }
}
