<?php

namespace App\Policies\Jewelry;

use App\Policies\JewelryResourcePolicy;

class CommentPolicy extends JewelryResourcePolicy
{
    protected function permissionName(): string
    {
        return 'comments';
    }
}
