<?php

namespace App\Http\Controllers\Jewelry;

use App\Http\Controllers\BaseController;
use App\Models\AlloyMixCalculation;
use App\Services\Jewelry\AlloyCalculatorService;
use Illuminate\Http\Request;

/**
 * PI-5 gap: metal inventory mixing / alloy calculator. `preview` is a
 * stateless calculation; `store` persists a draft; `apply` posts it into
 * the gold ledger (see AlloyCalculatorService::apply).
 */
class AlloyCalculatorController extends BaseController
{
    public function __construct(protected AlloyCalculatorService $service)
    {
    }

    public function index(Request $request)
    {
        $this->authorizeForUser(request()->user('api'), 'view', AlloyMixCalculation::class);
        $perPage = (int) $request->input('limit', 15);
        $query = AlloyMixCalculation::query()->with('targetKarat');

        $total = $query->count();
        if ($perPage === -1) {
            $perPage = max($total, 1);
        }
        $page = (int) $request->input('page', 1);
        $items = $query->orderByDesc('id')
            ->offset(max($page - 1, 0) * $perPage)
            ->limit($perPage)
            ->get();

        return response()->json(['data' => $items, 'totalRows' => $total]);
    }

    /**
     * Stateless calculation preview — no DB write.
     */
    public function preview(Request $request)
    {
        $this->authorizeForUser(request()->user('api'), 'view', AlloyMixCalculation::class);
        $request->validate([
            'source_batches' => 'required|array|min:1',
            'source_batches.*.karat_id' => 'required|integer|exists:karats,id',
            'source_batches.*.weight' => 'required|numeric|min:0.001',
            'target_karat_id' => 'required|integer|exists:karats,id',
            'target_weight' => 'nullable|numeric|min:0',
            'mode' => 'nullable|in:auto,dilute,enrich',
        ]);

        $breakdown = $this->service->calculate(
            $request->input('source_batches'),
            (int) $request->input('target_karat_id'),
            $request->filled('target_weight') ? (float) $request->input('target_weight') : null,
            $request->input('mode', 'auto')
        );

        return $this->sendResponse($breakdown, 'Alloy mix calculated.');
    }

    /**
     * Same calculation as preview(), persisted as a draft record.
     */
    public function store(Request $request)
    {
        $this->authorizeForUser(request()->user('api'), 'create', AlloyMixCalculation::class);
        $request->validate([
            'source_batches' => 'required|array|min:1',
            'source_batches.*.karat_id' => 'required|integer|exists:karats,id',
            'source_batches.*.weight' => 'required|numeric|min:0.001',
            'target_karat_id' => 'required|integer|exists:karats,id',
            'target_weight' => 'nullable|numeric|min:0',
            'mode' => 'nullable|in:auto,dilute,enrich',
        ]);

        $breakdown = $this->service->calculate(
            $request->input('source_batches'),
            (int) $request->input('target_karat_id'),
            $request->filled('target_weight') ? (float) $request->input('target_weight') : null,
            $request->input('mode', 'auto')
        );

        $calculation = AlloyMixCalculation::create([
            'source_batches' => $request->input('source_batches'),
            'target_karat_id' => $request->input('target_karat_id'),
            'target_weight' => $request->input('target_weight'),
            'mode' => $breakdown['mode'],
            'total_source_weight' => $breakdown['total_source_weight'],
            'total_source_fine_weight' => $breakdown['total_source_fine_weight'],
            'added_metal_weight' => $breakdown['added_metal_weight'],
            'added_metal_type' => $breakdown['added_metal_type'],
            'resulting_weight' => $breakdown['resulting_weight'],
            'resulting_fine_weight' => $breakdown['resulting_fine_weight'],
            'resulting_purity_percentage' => $breakdown['resulting_purity_percentage'],
            'calculated_by' => optional(request()->user('api'))->id,
        ]);

        return $this->sendResponse($calculation, 'Alloy mix calculation saved.');
    }

    public function show($id)
    {
        $this->authorizeForUser(request()->user('api'), 'view', AlloyMixCalculation::class);
        $item = AlloyMixCalculation::with(['targetKarat', 'goldLedgerAccount'])->findOrFail($id);

        return $this->sendResponse($item, 'Calculation retrieved successfully.');
    }

    /**
     * Post a saved draft's added metal into a GoldLedgerAccount's balance.
     */
    public function apply(Request $request, $id)
    {
        $this->authorizeForUser(request()->user('api'), 'update', AlloyMixCalculation::class);
        $request->validate([
            'gold_ledger_account_id' => 'required|integer|exists:gold_ledger_accounts,id',
        ]);

        $calculation = AlloyMixCalculation::findOrFail($id);

        try {
            $calculation = $this->service->apply(
                $calculation,
                (int) $request->input('gold_ledger_account_id'),
                optional(request()->user('api'))->id
            );
        } catch (\RuntimeException $e) {
            return $this->sendError($e->getMessage());
        }

        return $this->sendResponse($calculation, 'Alloy mix applied to inventory.');
    }

    public function destroy($id)
    {
        $this->authorizeForUser(request()->user('api'), 'delete', AlloyMixCalculation::class);
        $item = AlloyMixCalculation::findOrFail($id);

        if ($item->status === 'applied') {
            return $this->sendError('An applied calculation cannot be deleted.');
        }

        $item->delete();

        return $this->sendResponse([], 'Calculation deleted successfully.');
    }
}
