<?php
// Task 1.6

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class StoneType extends Model
{
    protected $fillable = ['name', 'code', 'is_active'];

    protected $casts = [
        'is_active' => 'boolean',
    ];
}
