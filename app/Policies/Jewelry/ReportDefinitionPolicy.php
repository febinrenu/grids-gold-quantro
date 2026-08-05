<?php

namespace App\Policies\Jewelry;

use App\Policies\JewelryResourcePolicy;

class ReportDefinitionPolicy extends JewelryResourcePolicy
{
    protected function permissionName(): string
    {
        return 'report_definitions';
    }
}
