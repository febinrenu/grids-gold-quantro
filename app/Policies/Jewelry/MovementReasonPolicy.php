<?php

namespace App\Policies\Jewelry;

use App\Policies\JewelryResourcePolicy;

class MovementReasonPolicy extends JewelryResourcePolicy
{
    protected function permissionName(): string
    {
        return 'movement_reasons';
    }
}
