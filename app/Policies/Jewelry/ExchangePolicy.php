<?php

namespace App\Policies\Jewelry;

use App\Policies\JewelryResourcePolicy;

class ExchangePolicy extends JewelryResourcePolicy
{
    protected function permissionName(): string
    {
        return 'exchanges';
    }
}
