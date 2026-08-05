<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class GoldLedgerEntry extends Model
{
    protected $table = 'gold_ledger_entries';

    protected $fillable = [
        'gold_ledger_account_id', 'transaction_type', 'gross_weight', 'net_weight',
        'fine_gold_weight', 'purity_percentage', 'direction', 'reference_module', 'reference_id',
        'transaction_date',
    ];

    protected $casts = [
        'gross_weight' => 'decimal:3',
        'net_weight' => 'decimal:3',
        'fine_gold_weight' => 'decimal:3',
        'purity_percentage' => 'decimal:2',
    ];

    public function goldLedgerAccount()
    {
        return $this->belongsTo(GoldLedgerAccount::class, 'gold_ledger_account_id');
    }
}
