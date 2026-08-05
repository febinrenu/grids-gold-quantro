<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class DashboardWidget extends Model
{
    public $timestamps = false;

    protected $table = 'dashboard_widgets';

    protected $fillable = [
        'dashboard_id', 'widget_type', 'position', 'refresh_interval_seconds',
        'required_permission',
    ];

    public function dashboard()
    {
        return $this->belongsTo(Dashboard::class, 'dashboard_id');
    }
}
