<?php

namespace App\Policies\Jewelry;

use App\Policies\JewelryResourcePolicy;

class ItemImagePolicy extends JewelryResourcePolicy
{
    protected function permissionName(): string
    {
        return 'item_images';
    }
}
