<?php

namespace App\Policies\Jewelry;

use App\Policies\JewelryResourcePolicy;

class RepairPaymentPolicy extends JewelryResourcePolicy
{
    protected function permissionName(): string
    {
        return 'repair_payments';
    }
}
