<?php

namespace App\Policies\Jewelry;

use App\Policies\JewelryResourcePolicy;

class ManufacturingStoneIssuePolicy extends JewelryResourcePolicy
{
    protected function permissionName(): string
    {
        return 'manufacturing_stone_issues';
    }
}
