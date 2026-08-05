<?php

namespace App\Models;

use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Model;

class SalesReturn extends Model
{
    use SoftDeletes;

    protected $table = 'sales_returns';

    protected $fillable = [
        'return_number', 'sale_id', 'client_id', 'return_reason', 'status',
    ];

    public function sale()
    {
        return $this->belongsTo(Sale::class, 'sale_id');
    }

    public function client()
    {
        return $this->belongsTo(Client::class, 'client_id');
    }
}
