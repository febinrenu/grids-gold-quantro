<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ReportDefinition extends Model
{
    public $timestamps = false;

    protected $table = 'report_definitions';

    protected $fillable = [
        'report_name', 'module', 'source_reference', 'export_formats', 'is_active',
    ];

    protected $casts = [
        'is_active' => 'boolean',
    ];
}
