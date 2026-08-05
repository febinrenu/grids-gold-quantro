<?php

namespace App\Http\Controllers\Jewelry;

use App\Http\Controllers\BaseController;
use App\Models\InventoryLabel;
use Illuminate\Http\Request;

/**
 * Generic CRUD for `inventory_labels` (SRS domain, database/jewelrydatabase.sql).
 * Access is gated by a single per-resource Permission (app/Policies/Jewelry).
 */
class InventoryLabelController extends BaseController
{
    public function index(Request $request)
    {
        $this->authorizeForUser(request()->user('api'), 'view', InventoryLabel::class);
        $perPage = (int) $request->input('limit', 15);
        $query = InventoryLabel::query();

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
        $this->authorizeForUser(request()->user('api'), 'create', InventoryLabel::class);
        $item = InventoryLabel::create($request->only((new InventoryLabel)->getFillable()));

        return $this->sendResponse($item, 'InventoryLabel created successfully.');
    }

    public function show($id)
    {
        $this->authorizeForUser(request()->user('api'), 'view', InventoryLabel::class);
        $item = InventoryLabel::findOrFail($id);

        return $this->sendResponse($item, 'InventoryLabel retrieved successfully.');
    }

    public function update(Request $request, $id)
    {
        $this->authorizeForUser(request()->user('api'), 'update', InventoryLabel::class);
        $item = InventoryLabel::findOrFail($id);
        $item->update($request->only($item->getFillable()));

        return $this->sendResponse($item, 'InventoryLabel updated successfully.');
    }

    public function destroy($id)
    {
        $this->authorizeForUser(request()->user('api'), 'delete', InventoryLabel::class);
        $item = InventoryLabel::findOrFail($id);
        $item->delete();

        return $this->sendResponse([], 'InventoryLabel deleted successfully.');
    }
}
