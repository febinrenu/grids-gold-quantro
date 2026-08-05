<?php

namespace App\Models;

use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Model;

class Tray extends Model
{
    use SoftDeletes;

    protected $table = 'trays';

    protected $fillable = [
        'shelf_id', 'tray_code', 'capacity', 'weight_limit', 'current_weight', 'rfid_zone',
        'status',
    ];

    protected $casts = [
        'capacity' => 'decimal:3',
        'weight_limit' => 'decimal:3',
        'current_weight' => 'decimal:3',
    ];

    public function shelf()
    {
        return $this->belongsTo(Shelf::class, 'shelf_id');
    }
}
