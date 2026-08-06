<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    protected $table = 'comments';

    protected $fillable = [
        'commentable_type', 'commentable_id', 'user_id', 'comment', 'mentioned_user_ids',
    ];

    protected $casts = [
        'mentioned_user_ids' => 'array',
    ];
}
