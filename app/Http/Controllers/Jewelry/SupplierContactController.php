<?php

namespace App\Http\Controllers\Jewelry;

use App\Http\Controllers\BaseController;
use App\Models\SupplierContact;
use Illuminate\Http\Request;

/**
 * Generic CRUD for `supplier_contacts` (SRS domain, database/jewelrydatabase.sql).
 * Access is gated by a single per-resource Permission (app/Policies/Jewelry).
 */
class SupplierContactController extends BaseController
{
    public function index(Request $request)
    {
        $this->authorizeForUser(request()->user('api'), 'view', SupplierContact::class);
        $perPage = (int) $request->input('limit', 15);
        $query = SupplierContact::query();

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
        $this->authorizeForUser(request()->user('api'), 'create', SupplierContact::class);
        $item = SupplierContact::create($request->only((new SupplierContact)->getFillable()));

        return $this->sendResponse($item, 'SupplierContact created successfully.');
    }

    public function show($id)
    {
        $this->authorizeForUser(request()->user('api'), 'view', SupplierContact::class);
        $item = SupplierContact::findOrFail($id);

        return $this->sendResponse($item, 'SupplierContact retrieved successfully.');
    }

    public function update(Request $request, $id)
    {
        $this->authorizeForUser(request()->user('api'), 'update', SupplierContact::class);
        $item = SupplierContact::findOrFail($id);
        $item->update($request->only($item->getFillable()));

        return $this->sendResponse($item, 'SupplierContact updated successfully.');
    }

    public function destroy($id)
    {
        $this->authorizeForUser(request()->user('api'), 'delete', SupplierContact::class);
        $item = SupplierContact::findOrFail($id);
        $item->delete();

        return $this->sendResponse([], 'SupplierContact deleted successfully.');
    }
}
