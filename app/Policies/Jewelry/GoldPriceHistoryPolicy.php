<?php

namespace App\Policies\Jewelry;

use App\Policies\JewelryResourcePolicy;

class GoldPriceHistoryPolicy extends JewelryResourcePolicy
{
    protected function permissionName(): string
    {
        return 'gold_price_history';
    }
}
