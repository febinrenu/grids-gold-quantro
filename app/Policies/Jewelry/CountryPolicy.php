<?php

namespace App\Policies\Jewelry;

use App\Policies\JewelryResourcePolicy;

class CountryPolicy extends JewelryResourcePolicy
{
    protected function permissionName(): string
    {
        return 'countries';
    }
}
