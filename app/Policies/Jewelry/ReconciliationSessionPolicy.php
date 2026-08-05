<?php

namespace App\Policies\Jewelry;

use App\Policies\JewelryResourcePolicy;

class ReconciliationSessionPolicy extends JewelryResourcePolicy
{
    protected function permissionName(): string
    {
        return 'reconciliation_sessions';
    }
}
