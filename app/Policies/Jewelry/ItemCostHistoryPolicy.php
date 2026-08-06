<?php

namespace App\Policies\Jewelry;

use App\Policies\JewelryResourcePolicy;

class ItemCostHistoryPolicy extends JewelryResourcePolicy
{
    protected function permissionName(): string
    {
        return 'item_cost_history';
    }
}
