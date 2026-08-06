<?php

namespace App\Policies\Jewelry;

use App\Policies\JewelryResourcePolicy;

class ReconciliationItemPolicy extends JewelryResourcePolicy
{
    protected function permissionName(): string
    {
        return 'reconciliation_items';
    }
}
