<?php

namespace App\Services;

use App\Models\AmlFlaggedTransaction;
use App\Models\Sale;
use App\Models\Setting;

/**
 * ST-2 gap: flags a completed sale for AML review when its total crosses the
 * tenant's configured cash-transaction threshold. Deliberately non-blocking —
 * it flags for a human to review rather than refusing the sale outright,
 * since hard-blocking a paid transaction from application code carries legal
 * and business risk far beyond what this feature should take on unilaterally.
 */
class AmlComplianceService
{
    public function checkTransaction(Sale $sale): ?AmlFlaggedTransaction
    {
        $setting = Setting::whereNull('deleted_at')->first();

        if (! ($setting->aml_kyc_enabled ?? false)) {
            return null;
        }

        $threshold = (float) ($setting->aml_transaction_threshold ?? 0);
        if ($threshold <= 0) {
            return null;
        }

        $amount = (float) ($sale->GrandTotal ?? 0);
        if ($amount < $threshold) {
            return null;
        }

        // Idempotent: calculateForSale()-style hooks can run more than once
        // for the same sale (e.g. a subsequent edit), and a unique index on
        // sale_id backs this up at the DB layer regardless.
        return AmlFlaggedTransaction::firstOrCreate(
            ['sale_id' => $sale->id],
            [
                'client_id' => $sale->client_id,
                'transaction_amount' => $amount,
                'currency_id' => $setting->currency_id ?? null,
                'threshold_amount' => $threshold,
                'flag_reason' => 'threshold_exceeded',
                'review_status' => 'pending',
            ]
        );
    }
}
