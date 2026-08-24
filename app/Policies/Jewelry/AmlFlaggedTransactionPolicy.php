<?php

namespace App\Policies\Jewelry;

use App\Policies\JewelryResourcePolicy;

class AmlFlaggedTransactionPolicy extends JewelryResourcePolicy
{
    protected function permissionName(): string
    {
        return 'aml_flagged_transactions';
    }
}
