<?php

namespace App\Policies\Jewelry;

use App\Policies\JewelryResourcePolicy;

class NotificationTemplatePolicy extends JewelryResourcePolicy
{
    protected function permissionName(): string
    {
        return 'notification_templates';
    }
}
