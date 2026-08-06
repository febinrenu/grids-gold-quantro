<?php

namespace App\Models;

use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Model;

class Hallmark extends Model
{
    use SoftDeletes;

    protected $table = 'hallmarks';

    protected $fillable = [
        'hallmark_authority', 'country', 'hallmark_code', 'image', 'verification_status',
    ];
}
