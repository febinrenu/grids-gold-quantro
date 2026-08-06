<?php

namespace App\Policies\Jewelry;

use App\Policies\JewelryResourcePolicy;

class VaultPolicy extends JewelryResourcePolicy
{
    protected function permissionName(): string
    {
        return 'vaults';
    }
}
