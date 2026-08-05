<?php

namespace App\Http\Controllers\Jewelry;

use App\Http\Controllers\BaseController;
use App\Models\SupplierInvoice;
use Illuminate\Http\Request;

/**
 * Generic CRUD for `supplier_invoices` (SRS domain, database/jewelrydatabase.sql).
 * Access is gated by a single per-resource Permission (app/Policies/Jewelry).
 */
class SupplierInvoiceController extends BaseController
{
    public function index(Request $request)
    {
        $this->authorizeForUser(request()->user('api'), 'view', SupplierInvoice::class);
        $perPage = (int) $request->input('limit', 15);
        $query = SupplierInvoice::query();

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
        $this->authorizeForUser(request()->user('api'), 'create', SupplierInvoice::class);
        $item = SupplierInvoice::create($request->only((new SupplierInvoice)->getFillable()));

        return $this->sendResponse($item, 'SupplierInvoice created successfully.');
    }

    public function show($id)
    {
        $this->authorizeForUser(request()->user('api'), 'view', SupplierInvoice::class);
        $item = SupplierInvoice::findOrFail($id);

        return $this->sendResponse($item, 'SupplierInvoice retrieved successfully.');
    }

    public function update(Request $request, $id)
    {
        $this->authorizeForUser(request()->user('api'), 'update', SupplierInvoice::class);
        $item = SupplierInvoice::findOrFail($id);
        $item->update($request->only($item->getFillable()));

        return $this->sendResponse($item, 'SupplierInvoice updated successfully.');
    }

    public function destroy($id)
    {
        $this->authorizeForUser(request()->user('api'), 'delete', SupplierInvoice::class);
        $item = SupplierInvoice::findOrFail($id);
        $item->delete();

        return $this->sendResponse([], 'SupplierInvoice deleted successfully.');
    }
}
