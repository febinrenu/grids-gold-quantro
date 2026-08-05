<?php

namespace App\Policies\Jewelry;

use App\Policies\JewelryResourcePolicy;

class GoldTestPolicy extends JewelryResourcePolicy
{
    protected function permissionName(): string
    {
        return 'gold_tests';
    }
}
