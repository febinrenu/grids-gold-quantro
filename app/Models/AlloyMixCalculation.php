<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AlloyMixCalculation extends Model
{
    protected $table = 'alloy_mix_calculations';

    protected $fillable = [
        'gold_ledger_account_id', 'source_batches', 'target_karat_id', 'target_weight', 'mode',
        'total_source_weight', 'total_source_fine_weight', 'added_metal_weight', 'added_metal_type',
        'resulting_weight', 'resulting_fine_weight', 'resulting_purity_percentage',
        'status', 'calculated_by', 'applied_at',
    ];

    protected $casts = [
        'source_batches' => 'array',
        'target_weight' => 'decimal:3',
        'total_source_weight' => 'decimal:3',
        'total_source_fine_weight' => 'decimal:3',
        'added_metal_weight' => 'decimal:3',
        'resulting_weight' => 'decimal:3',
        'resulting_fine_weight' => 'decimal:3',
        'resulting_purity_percentage' => 'decimal:2',
        'applied_at' => 'datetime',
    ];

    public function targetKarat()
    {
        return $this->belongsTo(Karat::class, 'target_karat_id');
    }

    public function goldLedgerAccount()
    {
        return $this->belongsTo(GoldLedgerAccount::class, 'gold_ledger_account_id');
    }
}
