<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ReconciliationSession extends Model
{
    protected $table = 'reconciliation_sessions';

    protected $fillable = [
        'session_number', 'reconciliation_type', 'reference_id', 'performed_by', 'status',
    ];
}
