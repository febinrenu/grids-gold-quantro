<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SavedReportFilter extends Model
{
    protected $table = 'saved_report_filters';

    protected $fillable = [
        'report_definition_id', 'user_id', 'name', 'filters',
    ];

    protected $casts = [
        'filters' => 'array',
    ];

    public function reportDefinition()
    {
        return $this->belongsTo(ReportDefinition::class, 'report_definition_id');
    }
}
