<?php

namespace App\Policies\Jewelry;

use App\Policies\JewelryResourcePolicy;

class BankAccountPolicy extends JewelryResourcePolicy
{
    protected function permissionName(): string
    {
        return 'bank_accounts';
    }
}
