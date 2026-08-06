<?php

namespace App\Policies\Jewelry;

use App\Policies\JewelryResourcePolicy;

class ManufacturingQcPolicy extends JewelryResourcePolicy
{
    protected function permissionName(): string
    {
        return 'manufacturing_qc';
    }
}
