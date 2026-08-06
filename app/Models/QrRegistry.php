<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class QrRegistry extends Model
{
    protected $table = 'qr_registry';

    protected $fillable = [
        'qr_value', 'qr_type', 'product_id', 'target_url', 'generated_at', 'last_scanned_at',
    ];
}
