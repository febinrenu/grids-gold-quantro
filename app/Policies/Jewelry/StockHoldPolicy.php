<?php

namespace App\Policies\Jewelry;

use App\Policies\JewelryResourcePolicy;

class StockHoldPolicy extends JewelryResourcePolicy
{
    protected function permissionName(): string
    {
        return 'stock_holds';
    }
}
