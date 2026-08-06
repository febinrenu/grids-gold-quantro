<?php

namespace App\Policies\Jewelry;

use App\Policies\JewelryResourcePolicy;

class SupplierInvoiceItemPolicy extends JewelryResourcePolicy
{
    protected function permissionName(): string
    {
        return 'supplier_invoice_items';
    }
}
