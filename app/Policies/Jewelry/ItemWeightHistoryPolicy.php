<?php

namespace App\Policies\Jewelry;

use App\Policies\JewelryResourcePolicy;

class ItemWeightHistoryPolicy extends JewelryResourcePolicy
{
    protected function permissionName(): string
    {
        return 'item_weight_history';
    }
}
