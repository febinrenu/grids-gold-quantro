<?php

namespace App\Policies\Jewelry;

use App\Policies\JewelryResourcePolicy;

class GoodsReceiptPolicy extends JewelryResourcePolicy
{
    protected function permissionName(): string
    {
        return 'goods_receipts';
    }
}
