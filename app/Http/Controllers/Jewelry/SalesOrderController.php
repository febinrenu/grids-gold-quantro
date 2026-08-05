<?php

namespace App\Http\Controllers\Jewelry;

use App\Http\Controllers\BaseController;
use App\Models\SalesOrder;
use Illuminate\Http\Request;

/**
 * Generic CRUD for `sales_orders` (SRS domain, database/jewelrydatabase.sql).
 * Access is gated by a single per-resource Permission (app/Policies/Jewelry).
 */
class SalesOrderController extends BaseController
{
    public function index(Request $request)
    {
        $this->authorizeForUser(request()->user('api'), 'view', SalesOrder::class);
        $perPage = (int) $request->input('limit', 15);
        $query = SalesOrder::query();

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
        $this->authorizeForUser(request()->user('api'), 'create', SalesOrder::class);
        $item = SalesOrder::create($request->only((new SalesOrder)->getFillable()));

        return $this->sendResponse($item, 'SalesOrder created successfully.');
    }

    public function show($id)
    {
        $this->authorizeForUser(request()->user('api'), 'view', SalesOrder::class);
        $item = SalesOrder::findOrFail($id);

        return $this->sendResponse($item, 'SalesOrder retrieved successfully.');
    }

    public function update(Request $request, $id)
    {
        $this->authorizeForUser(request()->user('api'), 'update', SalesOrder::class);
        $item = SalesOrder::findOrFail($id);
        $item->update($request->only($item->getFillable()));

        return $this->sendResponse($item, 'SalesOrder updated successfully.');
    }

    public function destroy($id)
    {
        $this->authorizeForUser(request()->user('api'), 'delete', SalesOrder::class);
        $item = SalesOrder::findOrFail($id);
        $item->delete();

        return $this->sendResponse([], 'SalesOrder deleted successfully.');
    }
}
