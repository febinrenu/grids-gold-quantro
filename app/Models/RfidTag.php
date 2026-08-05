<?php

namespace App\Models;

use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Model;

class RfidTag extends Model
{
    use SoftDeletes;

    protected $table = 'rfid_tags';

    protected $fillable = [
        'epc_number', 'tag_number', 'product_id', 'product_serial_id', 'tag_type', 'status',
        'activation_date',
    ];
}
