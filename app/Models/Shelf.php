<?php

namespace App\Models;

use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Model;

class Shelf extends Model
{
    use SoftDeletes;

    protected $table = 'shelves';

    protected $fillable = [
        'display_cabinet_id', 'shelf_number', 'capacity', 'status',
    ];

    protected $casts = [
        'capacity' => 'decimal:3',
    ];

    public function displayCabinet()
    {
        return $this->belongsTo(DisplayCabinet::class, 'display_cabinet_id');
    }
}
