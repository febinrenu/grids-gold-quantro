<?php

namespace App\Http\Controllers\Jewelry;

use App\Http\Controllers\BaseController;
use App\Models\RepairItem;
use Illuminate\Http\Request;

/**
 * Generic CRUD for `repair_items` (SRS domain, database/jewelrydatabase.sql).
 * Access is gated by a single per-resource Permission (app/Policies/Jewelry).
 */
class RepairItemController extends BaseController
{
    public function index(Request $request)
    {
        $this->authorizeForUser(request()->user('api'), 'view', RepairItem::class);
        $perPage = (int) $request->input('limit', 15);
        $query = RepairItem::query();

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
        $this->authorizeForUser(request()->user('api'), 'create', RepairItem::class);
        $item = RepairItem::create($request->only((new RepairItem)->getFillable()));

        return $this->sendResponse($item, 'RepairItem created successfully.');
    }

    public function show($id)
    {
        $this->authorizeForUser(request()->user('api'), 'view', RepairItem::class);
        $item = RepairItem::findOrFail($id);

        return $this->sendResponse($item, 'RepairItem retrieved successfully.');
    }

    public function update(Request $request, $id)
    {
        $this->authorizeForUser(request()->user('api'), 'update', RepairItem::class);
        $item = RepairItem::findOrFail($id);
        $item->update($request->only($item->getFillable()));

        return $this->sendResponse($item, 'RepairItem updated successfully.');
    }

    public function destroy($id)
    {
        $this->authorizeForUser(request()->user('api'), 'delete', RepairItem::class);
        $item = RepairItem::findOrFail($id);
        $item->delete();

        return $this->sendResponse([], 'RepairItem deleted successfully.');
    }
}
