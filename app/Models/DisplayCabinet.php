<?php

namespace App\Models;

use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Model;

class DisplayCabinet extends Model
{
    use SoftDeletes;

    protected $table = 'display_cabinets';

    protected $fillable = [
        'warehouse_id', 'cabinet_number', 'floor', 'section', 'lighting_type', 'capacity',
        'rfid_reader_id', 'status',
    ];

    protected $casts = [
        'capacity' => 'decimal:3',
    ];

    public function warehouse()
    {
        return $this->belongsTo(Warehouse::class, 'warehouse_id');
    }
}
