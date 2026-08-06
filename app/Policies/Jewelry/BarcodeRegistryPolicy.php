<?php

namespace App\Policies\Jewelry;

use App\Policies\JewelryResourcePolicy;

class BarcodeRegistryPolicy extends JewelryResourcePolicy
{
    protected function permissionName(): string
    {
        return 'barcode_registry';
    }
}
