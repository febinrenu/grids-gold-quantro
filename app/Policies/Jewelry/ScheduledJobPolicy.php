<?php

namespace App\Policies\Jewelry;

use App\Policies\JewelryResourcePolicy;

class ScheduledJobPolicy extends JewelryResourcePolicy
{
    protected function permissionName(): string
    {
        return 'scheduled_jobs';
    }
}
