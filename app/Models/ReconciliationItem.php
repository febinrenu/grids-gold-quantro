<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ReconciliationItem extends Model
{
    public $timestamps = false;

    protected $table = 'reconciliation_items';

    protected $fillable = [
        'reconciliation_session_id', 'expected_value', 'actual_value', 'difference', 'resolution',
    ];

    public function reconciliationSession()
    {
        return $this->belongsTo(ReconciliationSession::class, 'reconciliation_session_id');
    }
}
