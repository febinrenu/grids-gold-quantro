<?php

namespace App\Policies\Jewelry;

use App\Policies\JewelryResourcePolicy;

class GoldLedgerEntryPolicy extends JewelryResourcePolicy
{
    protected function permissionName(): string
    {
        return 'gold_ledger_entries';
    }
}
