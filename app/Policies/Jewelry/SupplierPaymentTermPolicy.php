<?php

namespace App\Policies\Jewelry;

use App\Policies\JewelryResourcePolicy;

class SupplierPaymentTermPolicy extends JewelryResourcePolicy
{
    protected function permissionName(): string
    {
        return 'supplier_payment_terms';
    }
}
