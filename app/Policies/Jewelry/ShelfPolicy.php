<?php

namespace App\Policies\Jewelry;

use App\Policies\JewelryResourcePolicy;

class ShelfPolicy extends JewelryResourcePolicy
{
    protected function permissionName(): string
    {
        return 'shelves';
    }
}
