<?php

namespace App\Policies\Jewelry;

use App\Policies\JewelryResourcePolicy;

class SupplierPerformancePolicy extends JewelryResourcePolicy
{
    protected function permissionName(): string
    {
        return 'supplier_performance';
    }
}
