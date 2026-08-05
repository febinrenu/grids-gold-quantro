<?php

namespace App\Policies\Jewelry;

use App\Policies\JewelryResourcePolicy;

class CustomerCreditNotePolicy extends JewelryResourcePolicy
{
    protected function permissionName(): string
    {
        return 'customer_credit_notes';
    }
}
