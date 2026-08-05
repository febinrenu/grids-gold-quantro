<?php

namespace App\Policies\Jewelry;

use App\Policies\JewelryResourcePolicy;

class ExchangeRatePolicy extends JewelryResourcePolicy
{
    protected function permissionName(): string
    {
        return 'exchange_rates';
    }
}
