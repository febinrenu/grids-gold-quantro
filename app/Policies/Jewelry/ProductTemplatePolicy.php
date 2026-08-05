<?php

namespace App\Policies\Jewelry;

use App\Policies\JewelryResourcePolicy;

class ProductTemplatePolicy extends JewelryResourcePolicy
{
    protected function permissionName(): string
    {
        return 'product_templates';
    }
}
