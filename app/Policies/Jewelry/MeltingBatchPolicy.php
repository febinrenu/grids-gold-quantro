<?php

namespace App\Policies\Jewelry;

use App\Policies\JewelryResourcePolicy;

class MeltingBatchPolicy extends JewelryResourcePolicy
{
    protected function permissionName(): string
    {
        return 'melting_batches';
    }
}
