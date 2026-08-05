<?php

namespace App\Policies\Jewelry;

use App\Policies\JewelryResourcePolicy;

class SalesOrderItemPolicy extends JewelryResourcePolicy
{
    protected function permissionName(): string
    {
        return 'sales_order_items';
    }
}
