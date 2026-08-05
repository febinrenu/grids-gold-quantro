<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class RefiningBatch extends Model
{
    protected $table = 'refining_batches';

    protected $fillable = [
        'melting_batch_id', 'input_purity', 'output_purity', 'fine_gold_weight', 'refinery',
    ];

    protected $casts = [
        'input_purity' => 'decimal:2',
        'output_purity' => 'decimal:2',
        'fine_gold_weight' => 'decimal:3',
    ];

    public function meltingBatch()
    {
        return $this->belongsTo(MeltingBatch::class, 'melting_batch_id');
    }
}
