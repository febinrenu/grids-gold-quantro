<?php

namespace App\Policies\Jewelry;

use App\Policies\JewelryResourcePolicy;

class ActivityLogPolicy extends JewelryResourcePolicy
{
    protected function permissionName(): string
    {
        return 'activity_logs';
    }
}
