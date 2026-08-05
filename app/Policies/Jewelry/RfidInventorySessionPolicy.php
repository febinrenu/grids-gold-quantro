<?php

namespace App\Policies\Jewelry;

use App\Policies\JewelryResourcePolicy;

class RfidInventorySessionPolicy extends JewelryResourcePolicy
{
    protected function permissionName(): string
    {
        return 'rfid_inventory_sessions';
    }
}
