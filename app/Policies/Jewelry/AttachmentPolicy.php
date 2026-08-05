<?php

namespace App\Policies\Jewelry;

use App\Policies\JewelryResourcePolicy;

class AttachmentPolicy extends JewelryResourcePolicy
{
    protected function permissionName(): string
    {
        return 'attachments';
    }
}
