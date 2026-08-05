<?php

namespace App\Http\Controllers\Jewelry;

use App\Http\Controllers\BaseController;
use App\Models\SupplierInvoiceItem;
use Illuminate\Http\Request;

/**
 * Generic CRUD for `supplier_invoice_items` (SRS domain, database/jewelrydatabase.sql).
 * Access is gated by a single per-resource Permission (app/Policies/Jewelry).
 */
class SupplierInvoiceItemController extends BaseController
{
    public function index(Request $request)
    {
        $this->authorizeForUser(request()->user('api'), 'view', SupplierInvoiceItem::class);
        $perPage = (int) $request->input('limit', 15);
        $query = SupplierInvoiceItem::query();

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
        $this->authorizeForUser(request()->user('api'), 'create', SupplierInvoiceItem::class);
        $item = SupplierInvoiceItem::create($request->only((new SupplierInvoiceItem)->getFillable()));

        return $this->sendResponse($item, 'SupplierInvoiceItem created successfully.');
    }

    public function show($id)
    {
        $this->authorizeForUser(request()->user('api'), 'view', SupplierInvoiceItem::class);
        $item = SupplierInvoiceItem::findOrFail($id);

        return $this->sendResponse($item, 'SupplierInvoiceItem retrieved successfully.');
    }

    public function update(Request $request, $id)
    {
        $this->authorizeForUser(request()->user('api'), 'update', SupplierInvoiceItem::class);
        $item = SupplierInvoiceItem::findOrFail($id);
        $item->update($request->only($item->getFillable()));

        return $this->sendResponse($item, 'SupplierInvoiceItem updated successfully.');
    }

    public function destroy($id)
    {
        $this->authorizeForUser(request()->user('api'), 'delete', SupplierInvoiceItem::class);
        $item = SupplierInvoiceItem::findOrFail($id);
        $item->delete();

        return $this->sendResponse([], 'SupplierInvoiceItem deleted successfully.');
    }
}
