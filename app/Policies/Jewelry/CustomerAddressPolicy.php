<?php

namespace App\Policies\Jewelry;

use App\Policies\JewelryResourcePolicy;

class CustomerAddressPolicy extends JewelryResourcePolicy
{
    protected function permissionName(): string
    {
        return 'customer_addresses';
    }
}
