<?php

namespace App\Policies\Jewelry;

use App\Policies\JewelryResourcePolicy;

class WorkshopSettlementPolicy extends JewelryResourcePolicy
{
    protected function permissionName(): string
    {
        return 'workshop_settlements';
    }
}
