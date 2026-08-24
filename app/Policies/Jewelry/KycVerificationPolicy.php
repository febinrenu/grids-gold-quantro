<?php

namespace App\Policies\Jewelry;

use App\Policies\JewelryResourcePolicy;

class KycVerificationPolicy extends JewelryResourcePolicy
{
    protected function permissionName(): string
    {
        return 'kyc_verifications';
    }
}
