<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ItemHallmark extends Model
{
    protected $table = 'item_hallmarks';

    protected $fillable = [
        'product_id', 'hallmark_id', 'applied_date', 'verified_by', 'verification_result', 'notes',
    ];

    public function hallmark()
    {
        return $this->belongsTo(Hallmark::class, 'hallmark_id');
    }
}
