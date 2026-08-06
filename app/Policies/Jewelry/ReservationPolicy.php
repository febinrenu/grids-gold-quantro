<?php

namespace App\Policies\Jewelry;

use App\Policies\JewelryResourcePolicy;

class ReservationPolicy extends JewelryResourcePolicy
{
    protected function permissionName(): string
    {
        return 'reservations';
    }
}
