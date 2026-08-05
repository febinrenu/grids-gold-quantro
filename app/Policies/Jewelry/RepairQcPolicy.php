<?php

namespace App\Policies\Jewelry;

use App\Policies\JewelryResourcePolicy;

class RepairQcPolicy extends JewelryResourcePolicy
{
    protected function permissionName(): string
    {
        return 'repair_qc';
    }
}
