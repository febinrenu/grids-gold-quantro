<?php

namespace App\Policies\Jewelry;

use App\Policies\JewelryResourcePolicy;

class RfidTagPolicy extends JewelryResourcePolicy
{
    protected function permissionName(): string
    {
        return 'rfid_tags';
    }
}
