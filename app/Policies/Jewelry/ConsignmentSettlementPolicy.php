<?php

namespace App\Policies\Jewelry;

use App\Policies\JewelryResourcePolicy;

class ConsignmentSettlementPolicy extends JewelryResourcePolicy
{
    protected function permissionName(): string
    {
        return 'consignment_settlements';
    }
}
