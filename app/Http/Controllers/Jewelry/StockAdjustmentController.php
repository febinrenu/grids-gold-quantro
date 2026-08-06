<?php

namespace App\Http\Controllers\Jewelry;

use App\Http\Controllers\BaseController;
use App\Models\StockAdjustment;
use Illuminate\Http\Request;

/**
 * Generic CRUD for `stock_adjustments` (SRS domain, database/jewelrydatabase.sql).
 * Access is gated by a single per-resource Permission (app/Policies/Jewelry).
 */
class StockAdjustmentController extends BaseController
{
    public function index(Request $request)
    {
        $this->authorizeForUser(request()->user('api'), 'view', StockAdjustment::class);
        $perPage = (int) $request->input('limit', 15);
        $query = StockAdjustment::query();

        $total = $query->count();
        if ($perPage === -1) {
            $perPage = max($total, 1);
        }
        $page = (int) $request->input('page', 1);
        $items = $query->orderByDesc('id')
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
        $this->authorizeForUser(request()->user('api'), 'create', StockAdjustment::class);
        $item = StockAdjustment::create($request->only((new StockAdjustment)->getFillable()));

        return $this->sendResponse($item, 'StockAdjustment created successfully.');
    }

    public function show($id)
    {
        $this->authorizeForUser(request()->user('api'), 'view', StockAdjustment::class);
        $item = StockAdjustment::findOrFail($id);

        return $this->sendResponse($item, 'StockAdjustment retrieved successfully.');
    }

    public function update(Request $request, $id)
    {
        $this->authorizeForUser(request()->user('api'), 'update', StockAdjustment::class);
        $item = StockAdjustment::findOrFail($id);
        $item->update($request->only($item->getFillable()));

        return $this->sendResponse($item, 'StockAdjustment updated successfully.');
    }

    public function destroy($id)
    {
        $this->authorizeForUser(request()->user('api'), 'delete', StockAdjustment::class);
        $item = StockAdjustment::findOrFail($id);
        $item->delete();

        return $this->sendResponse([], 'StockAdjustment deleted successfully.');
    }
}
