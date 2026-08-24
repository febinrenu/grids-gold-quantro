<?php

namespace App\Http\Controllers\Jewelry;

use App\Http\Controllers\BaseController;
use App\Models\ScaleReading;
use App\Services\Jewelry\WeighingScaleService;
use Illuminate\Http\Request;

/**
 * ST-3/PI-6 gap: weighing-scale hardware integration. `capture` pulls a live
 * reading from the configured scale bridge and stores it; the rest is
 * generic CRUD over the resulting scale_readings log.
 */
class ScaleReadingController extends BaseController
{
    public function __construct(protected WeighingScaleService $scaleService)
    {
    }

    public function index(Request $request)
    {
        $this->authorizeForUser(request()->user('api'), 'view', ScaleReading::class);
        $perPage = (int) $request->input('limit', 15);
        $query = ScaleReading::query();

        if ($request->filled('product_id')) {
            $query->where('product_id', $request->input('product_id'));
        }

        $total = $query->count();
        if ($perPage === -1) {
            $perPage = max($total, 1);
        }
        $page = (int) $request->input('page', 1);
        $items = $query->orderByDesc('captured_at')
            ->offset(max($page - 1, 0) * $perPage)
            ->limit($perPage)
            ->get();

        return response()->json(['data' => $items, 'totalRows' => $total]);
    }

    /**
     * Pull a live reading from the configured scale bridge and store it.
     */
    public function capture(Request $request)
    {
        $this->authorizeForUser(request()->user('api'), 'create', ScaleReading::class);
        $request->validate([
            'product_id' => 'nullable|integer|exists:products,id',
            'warehouse_id' => 'nullable|integer|exists:warehouses,id',
            'context' => 'nullable|string|max:30',
        ]);

        if (! $this->scaleService->isEnabled()) {
            return $this->sendError('Weighing scale integration is not enabled. Enable it in Settings → Jewelry.');
        }

        try {
            $weight = $this->scaleService->readWeightGrams();
        } catch (\RuntimeException $e) {
            return $this->sendError($e->getMessage());
        }

        $reading = ScaleReading::create([
            'product_id' => $request->input('product_id'),
            'warehouse_id' => $request->input('warehouse_id'),
            'weight_grams' => $weight,
            'context' => $request->input('context'),
            'captured_by' => optional(request()->user('api'))->id,
            'captured_at' => now(),
        ]);

        return $this->sendResponse($reading, 'Weight captured successfully.');
    }

    public function store(Request $request)
    {
        $this->authorizeForUser(request()->user('api'), 'create', ScaleReading::class);
        $request->validate([
            'weight_grams' => 'required|numeric|min:0',
        ]);

        $data = $request->only((new ScaleReading)->getFillable());
        $data['captured_by'] = $data['captured_by'] ?? optional(request()->user('api'))->id;
        $data['captured_at'] = $data['captured_at'] ?? now();

        $item = ScaleReading::create($data);

        return $this->sendResponse($item, 'Scale reading recorded successfully.');
    }

    public function show($id)
    {
        $this->authorizeForUser(request()->user('api'), 'view', ScaleReading::class);
        $item = ScaleReading::findOrFail($id);

        return $this->sendResponse($item, 'Scale reading retrieved successfully.');
    }

    public function destroy($id)
    {
        $this->authorizeForUser(request()->user('api'), 'delete', ScaleReading::class);
        $item = ScaleReading::findOrFail($id);
        $item->delete();

        return $this->sendResponse([], 'Scale reading deleted successfully.');
    }
}
