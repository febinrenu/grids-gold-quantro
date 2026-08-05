<?php

namespace App\Policies\Jewelry;

use App\Policies\JewelryResourcePolicy;

class GoodsReceiptItemPolicy extends JewelryResourcePolicy
{
    protected function permissionName(): string
    {
        return 'goods_receipt_items';
    }
}
