<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class State extends Model
{
    protected $table = 'states';

    protected $fillable = [
        'country_id', 'name', 'code',
    ];

    public function country()
    {
        return $this->belongsTo(Country::class, 'country_id');
    }
}
