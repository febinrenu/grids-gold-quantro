<?php

namespace App\Policies\Jewelry;

use App\Policies\JewelryResourcePolicy;

class DiamondPriceRatePolicy extends JewelryResourcePolicy
{
    protected function permissionName(): string
    {
        return 'diamond_price_rates';
    }
}
