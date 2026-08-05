<?php

namespace App\Policies\Jewelry;

use App\Policies\JewelryResourcePolicy;

class SalesReturnItemPolicy extends JewelryResourcePolicy
{
    protected function permissionName(): string
    {
        return 'sales_return_items';
    }
}
