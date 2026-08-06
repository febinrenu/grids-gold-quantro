<?php

namespace App\Policies\Jewelry;

use App\Policies\JewelryResourcePolicy;

class SavedReportFilterPolicy extends JewelryResourcePolicy
{
    protected function permissionName(): string
    {
        return 'saved_report_filters';
    }
}
