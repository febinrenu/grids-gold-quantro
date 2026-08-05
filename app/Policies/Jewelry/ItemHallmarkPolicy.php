<?php

namespace App\Policies\Jewelry;

use App\Policies\JewelryResourcePolicy;

class ItemHallmarkPolicy extends JewelryResourcePolicy
{
    protected function permissionName(): string
    {
        return 'item_hallmarks';
    }
}
