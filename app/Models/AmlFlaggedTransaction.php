<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AmlFlaggedTransaction extends Model
{
    protected $table = 'aml_flagged_transactions';

    protected $fillable = [
        'sale_id', 'client_id', 'transaction_amount', 'currency_id', 'threshold_amount',
        'flag_reason', 'reviewed_by', 'review_status', 'reviewed_at', 'notes',
    ];

    protected $casts = [
        'transaction_amount' => 'decimal:2',
        'threshold_amount' => 'decimal:2',
        'reviewed_at' => 'datetime',
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
