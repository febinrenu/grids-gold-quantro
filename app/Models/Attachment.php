<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Attachment extends Model
{
    protected $table = 'attachments';

    protected $fillable = [
        'attachable_type', 'attachable_id', 'file_type', 'path', 'original_name', 'uploaded_by',
    ];
}
