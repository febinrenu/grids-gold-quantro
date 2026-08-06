<?php

namespace App\Http\Controllers\Jewelry;

use App\Http\Controllers\BaseController;
use App\Models\InventoryStatus;
use Illuminate\Http\Request;

/**
 * Generic CRUD for `inventory_statuses` (SRS domain, database/jewelrydatabase.sql).
 * Access is gated by a single per-resource Permission (app/Policies/Jewelry).
 */
class InventoryStatusController extends BaseController
{
    public function index(Request $request)
    {
        $this->authorizeForUser(request()->user('api'), 'view', InventoryStatus::class);
        $perPage = (int) $request->input('limit', 15);
        $query = InventoryStatus::query();

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
        $this->authorizeForUser(request()->user('api'), 'create', InventoryStatus::class);
        $item = InventoryStatus::create($request->only((new InventoryStatus)->getFillable()));

        return $this->sendResponse($item, 'InventoryStatus created successfully.');
    }

    public function show($id)
    {
        $this->authorizeForUser(request()->user('api'), 'view', InventoryStatus::class);
        $item = InventoryStatus::findOrFail($id);

        return $this->sendResponse($item, 'InventoryStatus retrieved successfully.');
    }

    public function update(Request $request, $id)
    {
        $this->authorizeForUser(request()->user('api'), 'update', InventoryStatus::class);
        $item = InventoryStatus::findOrFail($id);
        $item->update($request->only($item->getFillable()));

        return $this->sendResponse($item, 'InventoryStatus updated successfully.');
    }

    public function destroy($id)
    {
        $this->authorizeForUser(request()->user('api'), 'delete', InventoryStatus::class);
        $item = InventoryStatus::findOrFail($id);
        $item->delete();

        return $this->sendResponse([], 'InventoryStatus deleted successfully.');
    }
}
