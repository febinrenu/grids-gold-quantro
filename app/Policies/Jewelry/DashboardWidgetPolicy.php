<?php

namespace App\Policies\Jewelry;

use App\Policies\JewelryResourcePolicy;

class DashboardWidgetPolicy extends JewelryResourcePolicy
{
    protected function permissionName(): string
    {
        return 'dashboard_widgets';
    }
}
