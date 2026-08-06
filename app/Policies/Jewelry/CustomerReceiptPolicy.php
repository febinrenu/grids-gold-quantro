<?php

namespace App\Policies\Jewelry;

use App\Policies\JewelryResourcePolicy;

class CustomerReceiptPolicy extends JewelryResourcePolicy
{
    protected function permissionName(): string
    {
        return 'customer_receipts';
    }
}
