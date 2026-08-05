<?php

namespace App\Http\Controllers\Jewelry;

use App\Http\Controllers\BaseController;
use App\Models\InventoryVariance;
use Illuminate\Http\Request;

/**
 * Generic CRUD for `inventory_variances` (SRS domain, database/jewelrydatabase.sql).
 * Access is gated by a single per-resource Permission (app/Policies/Jewelry).
 */
class InventoryVarianceController extends BaseController
{
    public function index(Request $request)
    {
        $this->authorizeForUser(request()->user('api'), 'view', InventoryVariance::class);
        $perPage = (int) $request->input('limit', 15);
        $query = InventoryVariance::query();

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
        $this->authorizeForUser(request()->user('api'), 'create', InventoryVariance::class);
        $item = InventoryVariance::create($request->only((new InventoryVariance)->getFillable()));

        return $this->sendResponse($item, 'InventoryVariance created successfully.');
    }

    public function show($id)
    {
        $this->authorizeForUser(request()->user('api'), 'view', InventoryVariance::class);
        $item = InventoryVariance::findOrFail($id);

        return $this->sendResponse($item, 'InventoryVariance retrieved successfully.');
    }

    public function update(Request $request, $id)
    {
        $this->authorizeForUser(request()->user('api'), 'update', InventoryVariance::class);
        $item = InventoryVariance::findOrFail($id);
        $item->update($request->only($item->getFillable()));

        return $this->sendResponse($item, 'InventoryVariance updated successfully.');
    }

    public function destroy($id)
    {
        $this->authorizeForUser(request()->user('api'), 'delete', InventoryVariance::class);
        $item = InventoryVariance::findOrFail($id);
        $item->delete();

        return $this->sendResponse([], 'InventoryVariance deleted successfully.');
    }
}
