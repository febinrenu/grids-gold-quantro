<?php

namespace App\Http\Controllers\Jewelry;

use App\Http\Controllers\BaseController;
use App\Models\InventoryFreeze;
use Illuminate\Http\Request;

/**
 * Generic CRUD for `inventory_freezes` (SRS domain, database/jewelrydatabase.sql).
 * Access is gated by a single per-resource Permission (app/Policies/Jewelry).
 */
class InventoryFreezeController extends BaseController
{
    public function index(Request $request)
    {
        $this->authorizeForUser(request()->user('api'), 'view', InventoryFreeze::class);
        $perPage = (int) $request->input('limit', 15);
        $query = InventoryFreeze::query();

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
        $this->authorizeForUser(request()->user('api'), 'create', InventoryFreeze::class);
        $item = InventoryFreeze::create($request->only((new InventoryFreeze)->getFillable()));

        return $this->sendResponse($item, 'InventoryFreeze created successfully.');
    }

    public function show($id)
    {
        $this->authorizeForUser(request()->user('api'), 'view', InventoryFreeze::class);
        $item = InventoryFreeze::findOrFail($id);

        return $this->sendResponse($item, 'InventoryFreeze retrieved successfully.');
    }

    public function update(Request $request, $id)
    {
        $this->authorizeForUser(request()->user('api'), 'update', InventoryFreeze::class);
        $item = InventoryFreeze::findOrFail($id);
        $item->update($request->only($item->getFillable()));

        return $this->sendResponse($item, 'InventoryFreeze updated successfully.');
    }

    public function destroy($id)
    {
        $this->authorizeForUser(request()->user('api'), 'delete', InventoryFreeze::class);
        $item = InventoryFreeze::findOrFail($id);
        $item->delete();

        return $this->sendResponse([], 'InventoryFreeze deleted successfully.');
    }
}
