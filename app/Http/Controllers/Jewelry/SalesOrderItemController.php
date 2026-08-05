<?php

namespace App\Http\Controllers\Jewelry;

use App\Http\Controllers\BaseController;
use App\Models\SalesOrderItem;
use Illuminate\Http\Request;

/**
 * Generic CRUD for `sales_order_items` (SRS domain, database/jewelrydatabase.sql).
 * Access is gated by a single per-resource Permission (app/Policies/Jewelry).
 */
class SalesOrderItemController extends BaseController
{
    public function index(Request $request)
    {
        $this->authorizeForUser(request()->user('api'), 'view', SalesOrderItem::class);
        $perPage = (int) $request->input('limit', 15);
        $query = SalesOrderItem::query();

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
        $this->authorizeForUser(request()->user('api'), 'create', SalesOrderItem::class);
        $item = SalesOrderItem::create($request->only((new SalesOrderItem)->getFillable()));

        return $this->sendResponse($item, 'SalesOrderItem created successfully.');
    }

    public function show($id)
    {
        $this->authorizeForUser(request()->user('api'), 'view', SalesOrderItem::class);
        $item = SalesOrderItem::findOrFail($id);

        return $this->sendResponse($item, 'SalesOrderItem retrieved successfully.');
    }

    public function update(Request $request, $id)
    {
        $this->authorizeForUser(request()->user('api'), 'update', SalesOrderItem::class);
        $item = SalesOrderItem::findOrFail($id);
        $item->update($request->only($item->getFillable()));

        return $this->sendResponse($item, 'SalesOrderItem updated successfully.');
    }

    public function destroy($id)
    {
        $this->authorizeForUser(request()->user('api'), 'delete', SalesOrderItem::class);
        $item = SalesOrderItem::findOrFail($id);
        $item->delete();

        return $this->sendResponse([], 'SalesOrderItem deleted successfully.');
    }
}
