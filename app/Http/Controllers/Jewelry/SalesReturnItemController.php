<?php

namespace App\Http\Controllers\Jewelry;

use App\Http\Controllers\BaseController;
use App\Models\SalesReturnItem;
use Illuminate\Http\Request;

/**
 * Generic CRUD for `sales_return_items` (SRS domain, database/jewelrydatabase.sql).
 * Access is gated by a single per-resource Permission (app/Policies/Jewelry).
 */
class SalesReturnItemController extends BaseController
{
    public function index(Request $request)
    {
        $this->authorizeForUser(request()->user('api'), 'view', SalesReturnItem::class);
        $perPage = (int) $request->input('limit', 15);
        $query = SalesReturnItem::query();

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
        $this->authorizeForUser(request()->user('api'), 'create', SalesReturnItem::class);
        $item = SalesReturnItem::create($request->only((new SalesReturnItem)->getFillable()));

        return $this->sendResponse($item, 'SalesReturnItem created successfully.');
    }

    public function show($id)
    {
        $this->authorizeForUser(request()->user('api'), 'view', SalesReturnItem::class);
        $item = SalesReturnItem::findOrFail($id);

        return $this->sendResponse($item, 'SalesReturnItem retrieved successfully.');
    }

    public function update(Request $request, $id)
    {
        $this->authorizeForUser(request()->user('api'), 'update', SalesReturnItem::class);
        $item = SalesReturnItem::findOrFail($id);
        $item->update($request->only($item->getFillable()));

        return $this->sendResponse($item, 'SalesReturnItem updated successfully.');
    }

    public function destroy($id)
    {
        $this->authorizeForUser(request()->user('api'), 'delete', SalesReturnItem::class);
        $item = SalesReturnItem::findOrFail($id);
        $item->delete();

        return $this->sendResponse([], 'SalesReturnItem deleted successfully.');
    }
}
