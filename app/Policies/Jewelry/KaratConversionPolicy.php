<?php

namespace App\Policies\Jewelry;

use App\Policies\JewelryResourcePolicy;

class KaratConversionPolicy extends JewelryResourcePolicy
{
    protected function permissionName(): string
    {
        return 'karat_conversions';
    }
}
