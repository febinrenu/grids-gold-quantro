<?php

namespace App\Policies\Jewelry;

use App\Policies\JewelryResourcePolicy;

class ItemCertificatePolicy extends JewelryResourcePolicy
{
    protected function permissionName(): string
    {
        return 'item_certificates';
    }
}
