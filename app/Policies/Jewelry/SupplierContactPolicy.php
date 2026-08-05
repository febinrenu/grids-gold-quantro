<?php

namespace App\Policies\Jewelry;

use App\Policies\JewelryResourcePolicy;

class SupplierContactPolicy extends JewelryResourcePolicy
{
    protected function permissionName(): string
    {
        return 'supplier_contacts';
    }
}
