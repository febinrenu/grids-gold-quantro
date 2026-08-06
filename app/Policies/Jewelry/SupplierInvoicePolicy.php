<?php

namespace App\Policies\Jewelry;

use App\Policies\JewelryResourcePolicy;

class SupplierInvoicePolicy extends JewelryResourcePolicy
{
    protected function permissionName(): string
    {
        return 'supplier_invoices';
    }
}
