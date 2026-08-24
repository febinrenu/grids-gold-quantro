<?php

namespace App\Policies\Jewelry;

use App\Policies\JewelryResourcePolicy;

class AlloyMixCalculationPolicy extends JewelryResourcePolicy
{
    protected function permissionName(): string
    {
        return 'alloy_mix_calculations';
    }
}
