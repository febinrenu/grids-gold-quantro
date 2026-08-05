<?php

namespace App\Http\Controllers\Jewelry;

use App\Http\Controllers\BaseController;
use App\Models\InventoryReconciliation;
use Illuminate\Http\Request;

/**
 * Generic CRUD for `inventory_reconciliations` (SRS domain, database/jewelrydatabase.sql).
 * Access is gated by a single per-resource Permission (app/Policies/Jewelry).
 */
class InventoryReconciliationController extends BaseController
{
    public function index(Request $request)
    {
        $this->authorizeForUser(request()->user('api'), 'view', InventoryReconciliation::class);
        $perPage = (int) $request->input('limit', 15);
        $query = InventoryReconciliation::query();

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
        $this->authorizeForUser(request()->user('api'), 'create', InventoryReconciliation::class);
        $item = InventoryReconciliation::create($request->only((new InventoryReconciliation)->getFillable()));

        return $this->sendResponse($item, 'InventoryReconciliation created successfully.');
    }

    public function show($id)
    {
        $this->authorizeForUser(request()->user('api'), 'view', InventoryReconciliation::class);
        $item = InventoryReconciliation::findOrFail($id);

        return $this->sendResponse($item, 'InventoryReconciliation retrieved successfully.');
    }

    public function update(Request $request, $id)
    {
        $this->authorizeForUser(request()->user('api'), 'update', InventoryReconciliation::class);
        $item = InventoryReconciliation::findOrFail($id);
        $item->update($request->only($item->getFillable()));

        return $this->sendResponse($item, 'InventoryReconciliation updated successfully.');
    }

    public function destroy($id)
    {
        $this->authorizeForUser(request()->user('api'), 'delete', InventoryReconciliation::class);
        $item = InventoryReconciliation::findOrFail($id);
        $item->delete();

        return $this->sendResponse([], 'InventoryReconciliation deleted successfully.');
    }
}
