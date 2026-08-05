<?php

namespace App\Http\Controllers\Jewelry;

use App\Http\Controllers\BaseController;
use App\Models\InventoryCount;
use Illuminate\Http\Request;

/**
 * Generic CRUD for `inventory_counts` (SRS domain, database/jewelrydatabase.sql).
 * Access is gated by a single per-resource Permission (app/Policies/Jewelry).
 */
class InventoryCountController extends BaseController
{
    public function index(Request $request)
    {
        $this->authorizeForUser(request()->user('api'), 'view', InventoryCount::class);
        $perPage = (int) $request->input('limit', 15);
        $query = InventoryCount::query();

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
        $this->authorizeForUser(request()->user('api'), 'create', InventoryCount::class);
        $item = InventoryCount::create($request->only((new InventoryCount)->getFillable()));

        return $this->sendResponse($item, 'InventoryCount created successfully.');
    }

    public function show($id)
    {
        $this->authorizeForUser(request()->user('api'), 'view', InventoryCount::class);
        $item = InventoryCount::findOrFail($id);

        return $this->sendResponse($item, 'InventoryCount retrieved successfully.');
    }

    public function update(Request $request, $id)
    {
        $this->authorizeForUser(request()->user('api'), 'update', InventoryCount::class);
        $item = InventoryCount::findOrFail($id);
        $item->update($request->only($item->getFillable()));

        return $this->sendResponse($item, 'InventoryCount updated successfully.');
    }

    public function destroy($id)
    {
        $this->authorizeForUser(request()->user('api'), 'delete', InventoryCount::class);
        $item = InventoryCount::findOrFail($id);
        $item->delete();

        return $this->sendResponse([], 'InventoryCount deleted successfully.');
    }
}
