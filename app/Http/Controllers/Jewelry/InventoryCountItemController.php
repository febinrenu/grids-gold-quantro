<?php

namespace App\Http\Controllers\Jewelry;

use App\Http\Controllers\BaseController;
use App\Models\InventoryCountItem;
use Illuminate\Http\Request;

/**
 * Generic CRUD for `inventory_count_items` (SRS domain, database/jewelrydatabase.sql).
 * Access is gated by a single per-resource Permission (app/Policies/Jewelry).
 */
class InventoryCountItemController extends BaseController
{
    public function index(Request $request)
    {
        $this->authorizeForUser(request()->user('api'), 'view', InventoryCountItem::class);
        $perPage = (int) $request->input('limit', 15);
        $query = InventoryCountItem::query();

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
        $this->authorizeForUser(request()->user('api'), 'create', InventoryCountItem::class);
        $item = InventoryCountItem::create($request->only((new InventoryCountItem)->getFillable()));

        return $this->sendResponse($item, 'InventoryCountItem created successfully.');
    }

    public function show($id)
    {
        $this->authorizeForUser(request()->user('api'), 'view', InventoryCountItem::class);
        $item = InventoryCountItem::findOrFail($id);

        return $this->sendResponse($item, 'InventoryCountItem retrieved successfully.');
    }

    public function update(Request $request, $id)
    {
        $this->authorizeForUser(request()->user('api'), 'update', InventoryCountItem::class);
        $item = InventoryCountItem::findOrFail($id);
        $item->update($request->only($item->getFillable()));

        return $this->sendResponse($item, 'InventoryCountItem updated successfully.');
    }

    public function destroy($id)
    {
        $this->authorizeForUser(request()->user('api'), 'delete', InventoryCountItem::class);
        $item = InventoryCountItem::findOrFail($id);
        $item->delete();

        return $this->sendResponse([], 'InventoryCountItem deleted successfully.');
    }
}
