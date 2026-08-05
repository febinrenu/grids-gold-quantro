<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class MeltingBatch extends Model
{
    protected $table = 'melting_batches';

    protected $fillable = [
        'batch_number', 'input_weight', 'output_weight', 'loss', 'furnace', 'operator_id',
    ];

    protected $casts = [
        'input_weight' => 'decimal:3',
        'output_weight' => 'decimal:3',
        'loss' => 'decimal:3',
    ];
}
