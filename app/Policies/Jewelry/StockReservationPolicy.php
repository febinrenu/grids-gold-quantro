<?php

namespace App\Policies\Jewelry;

use App\Policies\JewelryResourcePolicy;

class StockReservationPolicy extends JewelryResourcePolicy
{
    protected function permissionName(): string
    {
        return 'stock_reservations';
    }
}
