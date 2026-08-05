<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AccountsReceivable extends Model
{
    protected $table = 'accounts_receivable';

    protected $fillable = [
        'client_id', 'sale_id', 'due_date', 'outstanding_amount', 'aging_bucket', 'status',
    ];

    protected $casts = [
        'outstanding_amount' => 'decimal:3',
    ];

    public function client()
    {
        return $this->belongsTo(Client::class, 'client_id');
    }

    public function sale()
    {
        return $this->belongsTo(Sale::class, 'sale_id');
    }
}
