<?php

namespace App\Policies\Jewelry;

use App\Policies\JewelryResourcePolicy;

class RfidSessionItemPolicy extends JewelryResourcePolicy
{
    protected function permissionName(): string
    {
        return 'rfid_session_items';
    }
}
