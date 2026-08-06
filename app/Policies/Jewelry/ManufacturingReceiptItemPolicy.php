<?php

namespace App\Policies\Jewelry;

use App\Policies\JewelryResourcePolicy;

class ManufacturingReceiptItemPolicy extends JewelryResourcePolicy
{
    protected function permissionName(): string
    {
        return 'manufacturing_receipt_items';
    }
}
