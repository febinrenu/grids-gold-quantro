<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ItemImage extends Model
{
    protected $table = 'item_images';

    protected $fillable = [
        'product_id', 'image_type', 'path', 'display_order',
    ];
}
