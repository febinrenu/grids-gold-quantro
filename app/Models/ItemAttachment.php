<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ItemAttachment extends Model
{
    protected $table = 'item_attachments';

    protected $fillable = [
        'product_id', 'file_type', 'path', 'original_name', 'uploaded_by',
    ];
}
