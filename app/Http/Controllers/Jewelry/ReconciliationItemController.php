<?php

namespace App\Http\Controllers\Jewelry;

use App\Http\Controllers\BaseController;
use App\Models\ReconciliationItem;
use Illuminate\Http\Request;

/**
 * Generic CRUD for `reconciliation_items` (SRS domain, database/jewelrydatabase.sql).
 * Access is gated by a single per-resource Permission (app/Policies/Jewelry).
 */
class ReconciliationItemController extends BaseController
{
    public function index(Request $request)
    {
        $this->authorizeForUser(request()->user('api'), 'view', ReconciliationItem::class);
        $perPage = (int) $request->input('limit', 15);
        $query = ReconciliationItem::query();

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
        $this->authorizeForUser(request()->user('api'), 'create', ReconciliationItem::class);
        $item = ReconciliationItem::create($request->only((new ReconciliationItem)->getFillable()));

        return $this->sendResponse($item, 'ReconciliationItem created successfully.');
    }

    public function show($id)
    {
        $this->authorizeForUser(request()->user('api'), 'view', ReconciliationItem::class);
        $item = ReconciliationItem::findOrFail($id);

        return $this->sendResponse($item, 'ReconciliationItem retrieved successfully.');
    }

    public function update(Request $request, $id)
    {
        $this->authorizeForUser(request()->user('api'), 'update', ReconciliationItem::class);
        $item = ReconciliationItem::findOrFail($id);
        $item->update($request->only($item->getFillable()));

        return $this->sendResponse($item, 'ReconciliationItem updated successfully.');
    }

    public function destroy($id)
    {
        $this->authorizeForUser(request()->user('api'), 'delete', ReconciliationItem::class);
        $item = ReconciliationItem::findOrFail($id);
        $item->delete();

        return $this->sendResponse([], 'ReconciliationItem deleted successfully.');
    }
}
