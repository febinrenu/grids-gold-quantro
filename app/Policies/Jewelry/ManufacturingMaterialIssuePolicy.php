<?php

namespace App\Policies\Jewelry;

use App\Policies\JewelryResourcePolicy;

class ManufacturingMaterialIssuePolicy extends JewelryResourcePolicy
{
    protected function permissionName(): string
    {
        return 'manufacturing_material_issues';
    }
}
