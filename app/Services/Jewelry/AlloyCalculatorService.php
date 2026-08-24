<?php

namespace App\Services\Jewelry;

use App\Models\AlloyMixCalculation;
use App\Models\GoldBalance;
use App\Models\GoldLedgerAccount;
use App\Models\GoldLedgerEntry;
use App\Models\Karat;
use Illuminate\Support\Facades\DB;

/**
 * PI-5 gap: blends metal batches at known karats into a target karat.
 *
 * Two physical operations are supported:
 * - "dilute": target purity is LOWER than the blended source purity, so pure
 *   alloy (non-gold) metal is added. Fine gold weight is unchanged; only the
 *   total weight grows. resulting_weight = total_source_fine / target_purity.
 * - "enrich": target purity is HIGHER than the blended source purity, so pure
 *   (999+) gold is added. Solved from: (fine + x) / (weight + x) = target_purity.
 *
 * "auto" mode picks whichever of the two the numbers actually call for.
 */
class AlloyCalculatorService
{
    /**
     * @param array<int, array{karat_id:int, weight:float}> $sourceBatches
     */
    public function calculate(array $sourceBatches, int $targetKaratId, ?float $targetWeight = null, string $mode = 'auto'): array
    {
        if (empty($sourceBatches)) {
            throw new \InvalidArgumentException('At least one source batch is required.');
        }

        $karatIds = array_unique(array_merge(
            array_column($sourceBatches, 'karat_id'),
            [$targetKaratId]
        ));
        $karats = Karat::whereIn('id', $karatIds)->get()->keyBy('id');

        $targetKarat = $karats->get($targetKaratId);
        if (! $targetKarat) {
            throw new \InvalidArgumentException("Target karat {$targetKaratId} not found.");
        }
        $targetPurity = ((float) $targetKarat->purity_percentage) / 100;

        $totalWeight = 0.0;
        $totalFine = 0.0;
        foreach ($sourceBatches as $batch) {
            $karat = $karats->get($batch['karat_id'] ?? null);
            if (! $karat) {
                throw new \InvalidArgumentException("Source karat {$batch['karat_id']} not found.");
            }
            $weight = (float) ($batch['weight'] ?? 0);
            $totalWeight += $weight;
            $totalFine += $weight * (((float) $karat->purity_percentage) / 100);
        }

        if ($totalWeight <= 0) {
            throw new \InvalidArgumentException('Total source weight must be greater than zero.');
        }

        $blendedPurity = $totalFine / $totalWeight;

        if ($mode === 'auto') {
            $mode = $targetPurity < $blendedPurity ? 'dilute' : ($targetPurity > $blendedPurity ? 'enrich' : 'none');
        }

        $addedWeight = 0.0;
        $addedType = null;
        $resultingWeight = $totalWeight;
        $resultingFine = $totalFine;

        if ($mode === 'dilute') {
            if ($targetPurity <= 0) {
                throw new \InvalidArgumentException('Target purity must be greater than zero to dilute.');
            }
            $resultingWeight = $totalFine / $targetPurity;
            $addedWeight = max($resultingWeight - $totalWeight, 0);
            $addedType = 'alloy';
            $resultingFine = $totalFine;
        } elseif ($mode === 'enrich') {
            if ($targetPurity >= 1) {
                throw new \InvalidArgumentException('Target purity must be less than 100% to enrich by addition.');
            }
            $addedWeight = max((($targetPurity * $totalWeight) - $totalFine) / (1 - $targetPurity), 0);
            $addedType = 'pure_gold';
            $resultingWeight = $totalWeight + $addedWeight;
            $resultingFine = $totalFine + $addedWeight;
        }

        // An explicit target_weight is an assertion, not an input to the math —
        // report it back alongside the computed figures so a caller who passed
        // one can see how far off the physically-required weight is.
        return [
            'mode' => $mode,
            'total_source_weight' => round($totalWeight, 3),
            'total_source_fine_weight' => round($totalFine, 3),
            'blended_purity_percentage' => round($blendedPurity * 100, 2),
            'target_purity_percentage' => round($targetPurity * 100, 2),
            'requested_target_weight' => $targetWeight,
            'added_metal_weight' => round($addedWeight, 3),
            'added_metal_type' => $addedType,
            'resulting_weight' => round($resultingWeight, 3),
            'resulting_fine_weight' => round($resultingFine, 3),
            'resulting_purity_percentage' => $resultingWeight > 0 ? round(($resultingFine / $resultingWeight) * 100, 2) : 0,
        ];
    }

    /**
     * Persist a calculation as "applied" and post the added metal into the
     * target GoldLedgerAccount's balance + a GoldLedgerEntry audit row.
     */
    public function apply(AlloyMixCalculation $calculation, int $goldLedgerAccountId, ?int $userId = null): AlloyMixCalculation
    {
        if ($calculation->status === 'applied') {
            throw new \RuntimeException('This calculation has already been applied.');
        }

        return DB::transaction(function () use ($calculation, $goldLedgerAccountId, $userId) {
            $account = GoldLedgerAccount::findOrFail($goldLedgerAccountId);

            $addedFineWeight = $calculation->added_metal_type === 'pure_gold'
                ? (float) $calculation->added_metal_weight
                : 0.0; // alloy addition carries no fine gold value

            GoldLedgerEntry::create([
                'gold_ledger_account_id' => $account->id,
                'transaction_type' => 'alloy_mix',
                'gross_weight' => $calculation->added_metal_weight,
                'net_weight' => $calculation->added_metal_weight,
                'fine_gold_weight' => $addedFineWeight,
                'purity_percentage' => $calculation->added_metal_type === 'pure_gold' ? 100 : 0,
                'direction' => 'in',
                'reference_module' => 'alloy_mix_calculations',
                'reference_id' => $calculation->id,
                'transaction_date' => now(),
            ]);

            $balance = GoldBalance::firstOrNew(['gold_ledger_account_id' => $account->id]);
            $balance->gross_weight = (float) ($balance->gross_weight ?? 0) + (float) $calculation->added_metal_weight;
            $balance->fine_gold_weight = (float) ($balance->fine_gold_weight ?? 0) + $addedFineWeight;
            $balance->last_updated_at = now();
            $balance->save();

            $calculation->update([
                'gold_ledger_account_id' => $account->id,
                'status' => 'applied',
                'applied_at' => now(),
                'calculated_by' => $calculation->calculated_by ?? $userId,
            ]);

            return $calculation;
        });
    }
}
