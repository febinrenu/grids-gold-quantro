<?php

namespace App\Policies\Jewelry;

use App\Policies\JewelryResourcePolicy;

class QueueFailurePolicy extends JewelryResourcePolicy
{
    protected function permissionName(): string
    {
        return 'queue_failures';
    }
}
