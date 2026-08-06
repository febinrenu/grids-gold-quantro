<?php

namespace App\Policies\Jewelry;

use App\Policies\JewelryResourcePolicy;

class OwnershipTypePolicy extends JewelryResourcePolicy
{
    protected function permissionName(): string
    {
        return 'ownership_types';
    }
}
