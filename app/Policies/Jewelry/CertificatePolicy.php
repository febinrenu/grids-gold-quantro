<?php

namespace App\Policies\Jewelry;

use App\Policies\JewelryResourcePolicy;

class CertificatePolicy extends JewelryResourcePolicy
{
    protected function permissionName(): string
    {
        return 'certificates';
    }
}
