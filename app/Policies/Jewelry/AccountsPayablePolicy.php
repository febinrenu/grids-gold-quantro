<?php

namespace App\Policies\Jewelry;

use App\Policies\JewelryResourcePolicy;

class AccountsPayablePolicy extends JewelryResourcePolicy
{
    protected function permissionName(): string
    {
        return 'accounts_payable';
    }
}
