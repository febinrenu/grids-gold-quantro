<?php

namespace App\Policies\Jewelry;

use App\Policies\JewelryResourcePolicy;

class InstallmentPaymentPolicy extends JewelryResourcePolicy
{
    protected function permissionName(): string
    {
        return 'installment_payments';
    }
}
