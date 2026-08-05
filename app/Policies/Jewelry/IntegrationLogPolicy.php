<?php

namespace App\Policies\Jewelry;

use App\Policies\JewelryResourcePolicy;

class IntegrationLogPolicy extends JewelryResourcePolicy
{
    protected function permissionName(): string
    {
        return 'integration_logs';
    }
}
