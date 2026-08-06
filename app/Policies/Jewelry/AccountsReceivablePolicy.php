<?php

namespace App\Policies\Jewelry;

use App\Policies\JewelryResourcePolicy;

class AccountsReceivablePolicy extends JewelryResourcePolicy
{
    protected function permissionName(): string
    {
        return 'accounts_receivable';
    }
}
