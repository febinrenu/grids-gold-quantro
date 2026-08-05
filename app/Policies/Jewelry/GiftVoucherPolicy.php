<?php

namespace App\Policies\Jewelry;

use App\Policies\JewelryResourcePolicy;

class GiftVoucherPolicy extends JewelryResourcePolicy
{
    protected function permissionName(): string
    {
        return 'gift_vouchers';
    }
}
