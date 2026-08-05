<?php

namespace App\Policies\Jewelry;

use App\Policies\JewelryResourcePolicy;

class JewelryCollectionPolicy extends JewelryResourcePolicy
{
    protected function permissionName(): string
    {
        return 'jewelry_collections';
    }
}
