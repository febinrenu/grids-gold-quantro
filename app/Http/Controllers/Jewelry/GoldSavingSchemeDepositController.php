<?php

namespace App\Http\Controllers\Jewelry;

use App\Http\Controllers\BaseController;
use App\Models\GoldRate;
use App\Models\GoldSavingScheme;
use App\Models\GoldSavingSchemeDeposit;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

/**
 * ST-1 gap: individual installment payments against a GoldSavingScheme.
 * Unlike plain generic CRUD, store()/destroy() keep the parent scheme's
 * running totals (total_deposited_amount/total_deposited_weight) in sync —
 * that rollup is the entire point of tracking deposits separately.
 */
class GoldSavingSchemeDepositController extends BaseController
{
    public function index(Request $request)
    {
        $this->authorizeForUser(request()->user('api'), 'view', GoldSavingSchemeDeposit::class);
        $query = GoldSavingSchemeDeposit::query();

        if ($request->filled('scheme_id')) {
            $query->where('scheme_id', $request->input('scheme_id'));
        }

        $perPage = (int) $request->input('limit', 15);
        $total = $query->count();
        if ($perPage === -1) {
            $perPage = max($total, 1);
        }
        $page = (int) $request->input('page', 1);
        $items = $query->orderByDesc('deposit_date')
            ->offset(max($page - 1, 0) * $perPage)
            ->limit($perPage)
            ->get();

        return response()->json([
            'data' => $items,
            'totalRows' => $total,
        ]);
    }

    public function store(Request $request)
    {
        $this->authorizeForUser(request()->user('api'), 'create', GoldSavingSchemeDeposit::class);
        $request->validate([
            'scheme_id' => 'required|integer|exists:gold_saving_schemes,id',
            'deposit_date' => 'required|date',
            'amount' => 'required|numeric|min:0.01',
            'gold_rate_id' => 'nullable|integer|exists:gold_rates,id',
            'payment_method' => 'nullable|string|max:30',
            'receipt_number' => 'nullable|string|max:50',
        ]);

        $item = DB::transaction(function () use ($request) {
            $scheme = GoldSavingScheme::lockForUpdate()->findOrFail($request->input('scheme_id'));

            $equivalentWeight = null;
            $goldRateId = $request->input('gold_rate_id');
            if ($goldRateId) {
                $rate = GoldRate::find($goldRateId);
                if ($rate && (float) $rate->rate_per_weight_unit > 0) {
                    $equivalentWeight = round(((float) $request->input('amount')) / (float) $rate->rate_per_weight_unit, 3);
                }
            }

            $deposit = GoldSavingSchemeDeposit::create([
                'scheme_id' => $scheme->id,
                'deposit_date' => $request->input('deposit_date'),
                'amount' => $request->input('amount'),
                'gold_rate_id' => $goldRateId,
                'equivalent_weight' => $equivalentWeight,
                'payment_method' => $request->input('payment_method'),
                'receipt_number' => $request->input('receipt_number'),
                'recorded_by' => optional(request()->user('api'))->id,
                'notes' => $request->input('notes'),
            ]);

            $scheme->increment('total_deposited_amount', $deposit->amount);
            if ($equivalentWeight !== null) {
                $scheme->increment('total_deposited_weight', $equivalentWeight);
            }

            return $deposit;
        });

        return $this->sendResponse($item, 'Deposit recorded successfully.');
    }

    public function show($id)
    {
        $this->authorizeForUser(request()->user('api'), 'view', GoldSavingSchemeDeposit::class);
        $item = GoldSavingSchemeDeposit::findOrFail($id);

        return $this->sendResponse($item, 'Deposit retrieved successfully.');
    }

    public function destroy($id)
    {
        $this->authorizeForUser(request()->user('api'), 'delete', GoldSavingSchemeDeposit::class);

        DB::transaction(function () use ($id) {
            $deposit = GoldSavingSchemeDeposit::lockForUpdate()->findOrFail($id);
            $scheme = GoldSavingScheme::lockForUpdate()->find($deposit->scheme_id);

            if ($scheme) {
                $scheme->decrement('total_deposited_amount', $deposit->amount);
                if ($deposit->equivalent_weight !== null) {
                    $scheme->decrement('total_deposited_weight', $deposit->equivalent_weight);
                }
            }

            $deposit->delete();
        });

        return $this->sendResponse([], 'Deposit deleted successfully.');
    }
}
