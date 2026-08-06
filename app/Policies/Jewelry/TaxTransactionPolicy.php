<?php

namespace App\Policies\Jewelry;

use App\Policies\JewelryResourcePolicy;

class TaxTransactionPolicy extends JewelryResourcePolicy
{
    protected function permissionName(): string
    {
        return 'tax_transactions';
    }
}
