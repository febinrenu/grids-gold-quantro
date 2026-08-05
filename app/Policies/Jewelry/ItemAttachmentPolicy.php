<?php

namespace App\Policies\Jewelry;

use App\Policies\JewelryResourcePolicy;

class ItemAttachmentPolicy extends JewelryResourcePolicy
{
    protected function permissionName(): string
    {
        return 'item_attachments';
    }
}
