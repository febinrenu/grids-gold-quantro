<?php

namespace App\Policies\Jewelry;

use App\Policies\JewelryResourcePolicy;

class WarehouseReceiptPolicy extends JewelryResourcePolicy
{
    protected function permissionName(): string
    {
        return 'warehouse_receipts';
    }
}
