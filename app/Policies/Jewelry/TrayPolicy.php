<?php

namespace App\Policies\Jewelry;

use App\Policies\JewelryResourcePolicy;

class TrayPolicy extends JewelryResourcePolicy
{
    protected function permissionName(): string
    {
        return 'trays';
    }
}
