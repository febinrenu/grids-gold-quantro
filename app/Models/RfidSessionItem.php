<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class RfidSessionItem extends Model
{
    public $timestamps = false;

    protected $table = 'rfid_session_items';

    protected $fillable = [
        'rfid_inventory_session_id', 'rfid_tag_id', 'detected_at', 'reader_id', 'signal_strength',
        'detected_warehouse_location_id',
    ];

    protected $casts = [
        'signal_strength' => 'decimal:2',
    ];

    public function rfidInventorySession()
    {
        return $this->belongsTo(RfidInventorySession::class, 'rfid_inventory_session_id');
    }

    public function rfidTag()
    {
        return $this->belongsTo(RfidTag::class, 'rfid_tag_id');
    }
}
