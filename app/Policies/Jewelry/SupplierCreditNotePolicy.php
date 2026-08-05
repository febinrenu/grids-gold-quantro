<?php

namespace App\Policies\Jewelry;

use App\Policies\JewelryResourcePolicy;

class SupplierCreditNotePolicy extends JewelryResourcePolicy
{
    protected function permissionName(): string
    {
        return 'supplier_credit_notes';
    }
}
