<?php

namespace App\Policies\Jewelry;

use App\Policies\JewelryResourcePolicy;

class BranchPolicy extends JewelryResourcePolicy
{
    protected function permissionName(): string
    {
        return 'branches';
    }
}
