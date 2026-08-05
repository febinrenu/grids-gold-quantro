<?php

namespace App\Policies\Jewelry;

use App\Policies\JewelryResourcePolicy;

class CustomerDepositPolicy extends JewelryResourcePolicy
{
    protected function permissionName(): string
    {
        return 'customer_deposits';
    }
}
