<?php

namespace App\Http\Controllers\Jewelry;

use App\Http\Controllers\BaseController;
use App\Models\SalesReturn;
use Illuminate\Http\Request;

/**
 * Generic CRUD for `sales_returns` (SRS domain, database/jewelrydatabase.sql).
 * Access is gated by a single per-resource Permission (app/Policies/Jewelry).
 */
class SalesReturnController extends BaseController
{
    public function index(Request $request)
    {
        $this->authorizeForUser(request()->user('api'), 'view', SalesReturn::class);
        $perPage = (int) $request->input('limit', 15);
        $query = SalesReturn::query();

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
        $this->authorizeForUser(request()->user('api'), 'create', SalesReturn::class);
        $item = SalesReturn::create($request->only((new SalesReturn)->getFillable()));

        return $this->sendResponse($item, 'SalesReturn created successfully.');
    }

    public function show($id)
    {
        $this->authorizeForUser(request()->user('api'), 'view', SalesReturn::class);
        $item = SalesReturn::findOrFail($id);

        return $this->sendResponse($item, 'SalesReturn retrieved successfully.');
    }

    public function update(Request $request, $id)
    {
        $this->authorizeForUser(request()->user('api'), 'update', SalesReturn::class);
        $item = SalesReturn::findOrFail($id);
        $item->update($request->only($item->getFillable()));

        return $this->sendResponse($item, 'SalesReturn updated successfully.');
    }

    public function destroy($id)
    {
        $this->authorizeForUser(request()->user('api'), 'delete', SalesReturn::class);
        $item = SalesReturn::findOrFail($id);
        $item->delete();

        return $this->sendResponse([], 'SalesReturn deleted successfully.');
    }
}
