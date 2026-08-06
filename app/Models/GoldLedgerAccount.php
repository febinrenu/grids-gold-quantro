<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class GoldLedgerAccount extends Model
{
    public $timestamps = false;

    protected $table = 'gold_ledger_accounts';

    protected $fillable = [
        'name', 'account_type', 'owner_type', 'owner_id', 'is_active',
    ];

    protected $casts = [
        'is_active' => 'boolean',
    ];
}
