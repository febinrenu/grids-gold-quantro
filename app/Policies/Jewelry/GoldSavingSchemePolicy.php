<?php

namespace App\Policies\Jewelry;

use App\Policies\JewelryResourcePolicy;

class GoldSavingSchemePolicy extends JewelryResourcePolicy
{
    protected function permissionName(): string
    {
        return 'gold_saving_schemes';
    }
}
