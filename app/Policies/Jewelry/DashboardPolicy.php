<?php

namespace App\Policies\Jewelry;

use App\Policies\JewelryResourcePolicy;

class DashboardPolicy extends JewelryResourcePolicy
{
    protected function permissionName(): string
    {
        return 'dashboards';
    }
}
