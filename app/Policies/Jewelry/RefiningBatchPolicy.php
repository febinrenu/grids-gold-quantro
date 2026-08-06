<?php

namespace App\Policies\Jewelry;

use App\Policies\JewelryResourcePolicy;

class RefiningBatchPolicy extends JewelryResourcePolicy
{
    protected function permissionName(): string
    {
        return 'refining_batches';
    }
}
