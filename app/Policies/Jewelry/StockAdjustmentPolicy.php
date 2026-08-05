<?php

namespace App\Policies\Jewelry;

use App\Policies\JewelryResourcePolicy;

class StockAdjustmentPolicy extends JewelryResourcePolicy
{
    protected function permissionName(): string
    {
        return 'stock_adjustments';
    }
}
