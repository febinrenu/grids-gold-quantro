<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class RfidInventorySession extends Model
{
    protected $table = 'rfid_inventory_sessions';

    protected $fillable = [
        'session_number', 'warehouse_id', 'reader_id', 'started_at', 'ended_at',
        'total_tags_found', 'missing_tags', 'unexpected_tags',
    ];
}
