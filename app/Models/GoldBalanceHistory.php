<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class GoldBalanceHistory extends Model
{
    public $timestamps = false;

    protected $table = 'gold_balance_history';

    protected $fillable = [
        'gold_ledger_account_id', 'snapshot_date', 'gross_weight', 'fine_gold_weight',
        'snapshot_type',
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
