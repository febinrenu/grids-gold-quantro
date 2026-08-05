<?php

namespace App\Http\Controllers\Jewelry;

use App\Http\Controllers\BaseController;
use App\Models\SupplierPerformance;
use Illuminate\Http\Request;

/**
 * Generic CRUD for `supplier_performance` (SRS domain, database/jewelrydatabase.sql).
 * Access is gated by a single per-resource Permission (app/Policies/Jewelry).
 */
class SupplierPerformanceController extends BaseController
{
    public function index(Request $request)
    {
        $this->authorizeForUser(request()->user('api'), 'view', SupplierPerformance::class);
        $perPage = (int) $request->input('limit', 15);
        $query = SupplierPerformance::query();

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
        $this->authorizeForUser(request()->user('api'), 'create', SupplierPerformance::class);
        $item = SupplierPerformance::create($request->only((new SupplierPerformance)->getFillable()));

        return $this->sendResponse($item, 'SupplierPerformance created successfully.');
    }

    public function show($id)
    {
        $this->authorizeForUser(request()->user('api'), 'view', SupplierPerformance::class);
        $item = SupplierPerformance::findOrFail($id);

        return $this->sendResponse($item, 'SupplierPerformance retrieved successfully.');
    }

    public function update(Request $request, $id)
    {
        $this->authorizeForUser(request()->user('api'), 'update', SupplierPerformance::class);
        $item = SupplierPerformance::findOrFail($id);
        $item->update($request->only($item->getFillable()));

        return $this->sendResponse($item, 'SupplierPerformance updated successfully.');
    }

    public function destroy($id)
    {
        $this->authorizeForUser(request()->user('api'), 'delete', SupplierPerformance::class);
        $item = SupplierPerformance::findOrFail($id);
        $item->delete();

        return $this->sendResponse([], 'SupplierPerformance deleted successfully.');
    }
}
