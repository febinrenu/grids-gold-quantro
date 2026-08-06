<?php

namespace App\Policies\Jewelry;

use App\Policies\JewelryResourcePolicy;

class StatePolicy extends JewelryResourcePolicy
{
    protected function permissionName(): string
    {
        return 'states';
    }
}
