<?php

namespace App\Policies\Jewelry;

use App\Policies\JewelryResourcePolicy;

class TaxCodePolicy extends JewelryResourcePolicy
{
    protected function permissionName(): string
    {
        return 'tax_codes';
    }
}
