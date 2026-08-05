<?php

namespace App\Policies\Jewelry;

use App\Policies\JewelryResourcePolicy;

class ProductDesignPolicy extends JewelryResourcePolicy
{
    protected function permissionName(): string
    {
        return 'product_designs';
    }
}
