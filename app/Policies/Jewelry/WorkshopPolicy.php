<?php

namespace App\Policies\Jewelry;

use App\Policies\JewelryResourcePolicy;

class WorkshopPolicy extends JewelryResourcePolicy
{
    protected function permissionName(): string
    {
        return 'workshops';
    }
}
