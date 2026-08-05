<?php

namespace App\Policies\Jewelry;

use App\Policies\JewelryResourcePolicy;

class ApiTokenPolicy extends JewelryResourcePolicy
{
    protected function permissionName(): string
    {
        return 'api_tokens';
    }
}
