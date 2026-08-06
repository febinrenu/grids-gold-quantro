<?php

namespace App\Http\Controllers\Jewelry;

use App\Http\Controllers\BaseController;
use App\Models\CustomerAddress;
use Illuminate\Http\Request;

/**
 * Generic CRUD for `customer_addresses` (SRS domain, database/jewelrydatabase.sql).
 * Access is gated by a single per-resource Permission (app/Policies/Jewelry).
 */
class CustomerAddressController extends BaseController
{
    public function index(Request $request)
    {
        $this->authorizeForUser(request()->user('api'), 'view', CustomerAddress::class);
        $perPage = (int) $request->input('limit', 15);
        $query = CustomerAddress::query();

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
        $this->authorizeForUser(request()->user('api'), 'create', CustomerAddress::class);
        $item = CustomerAddress::create($request->only((new CustomerAddress)->getFillable()));

        return $this->sendResponse($item, 'CustomerAddress created successfully.');
    }

    public function show($id)
    {
        $this->authorizeForUser(request()->user('api'), 'view', CustomerAddress::class);
        $item = CustomerAddress::findOrFail($id);

        return $this->sendResponse($item, 'CustomerAddress retrieved successfully.');
    }

    public function update(Request $request, $id)
    {
        $this->authorizeForUser(request()->user('api'), 'update', CustomerAddress::class);
        $item = CustomerAddress::findOrFail($id);
        $item->update($request->only($item->getFillable()));

        return $this->sendResponse($item, 'CustomerAddress updated successfully.');
    }

    public function destroy($id)
    {
        $this->authorizeForUser(request()->user('api'), 'delete', CustomerAddress::class);
        $item = CustomerAddress::findOrFail($id);
        $item->delete();

        return $this->sendResponse([], 'CustomerAddress deleted successfully.');
    }
}
