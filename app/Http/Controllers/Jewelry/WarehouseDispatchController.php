<?php

namespace App\Http\Controllers\Jewelry;

use App\Http\Controllers\BaseController;
use App\Models\WarehouseDispatch;
use Illuminate\Http\Request;

/**
 * Generic CRUD for `warehouse_dispatches` (SRS domain, database/jewelrydatabase.sql).
 * Access is gated by a single per-resource Permission (app/Policies/Jewelry).
 */
class WarehouseDispatchController extends BaseController
{
    public function index(Request $request)
    {
        $this->authorizeForUser(request()->user('api'), 'view', WarehouseDispatch::class);
        $perPage = (int) $request->input('limit', 15);
        $query = WarehouseDispatch::query();

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
        $this->authorizeForUser(request()->user('api'), 'create', WarehouseDispatch::class);
        $item = WarehouseDispatch::create($request->only((new WarehouseDispatch)->getFillable()));

        return $this->sendResponse($item, 'WarehouseDispatch created successfully.');
    }

    public function show($id)
    {
        $this->authorizeForUser(request()->user('api'), 'view', WarehouseDispatch::class);
        $item = WarehouseDispatch::findOrFail($id);

        return $this->sendResponse($item, 'WarehouseDispatch retrieved successfully.');
    }

    public function update(Request $request, $id)
    {
        $this->authorizeForUser(request()->user('api'), 'update', WarehouseDispatch::class);
        $item = WarehouseDispatch::findOrFail($id);
        $item->update($request->only($item->getFillable()));

        return $this->sendResponse($item, 'WarehouseDispatch updated successfully.');
    }

    public function destroy($id)
    {
        $this->authorizeForUser(request()->user('api'), 'delete', WarehouseDispatch::class);
        $item = WarehouseDispatch::findOrFail($id);
        $item->delete();

        return $this->sendResponse([], 'WarehouseDispatch deleted successfully.');
    }
}
