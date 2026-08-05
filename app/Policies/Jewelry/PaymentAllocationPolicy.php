<?php

namespace App\Policies\Jewelry;

use App\Policies\JewelryResourcePolicy;

class PaymentAllocationPolicy extends JewelryResourcePolicy
{
    protected function permissionName(): string
    {
        return 'payment_allocations';
    }
}
