<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class GoldBalance extends Model
{
    public $timestamps = false;

    protected $table = 'gold_balances';

    protected $fillable = [
        'gold_ledger_account_id', 'gross_weight', 'fine_gold_weight', 'last_updated_at',
    ];

    protected $casts = [
        'gross_weight' => 'decimal:3',
        'fine_gold_weight' => 'decimal:3',
    ];

    public function goldLedgerAccount()
    {
        return $this->belongsTo(GoldLedgerAccount::class, 'gold_ledger_account_id');
    }
}
