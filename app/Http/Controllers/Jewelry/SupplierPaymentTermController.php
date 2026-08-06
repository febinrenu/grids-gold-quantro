<?php

namespace App\Http\Controllers\Jewelry;

use App\Http\Controllers\BaseController;
use App\Models\SupplierPaymentTerm;
use Illuminate\Http\Request;

/**
 * Generic CRUD for `supplier_payment_terms` (SRS domain, database/jewelrydatabase.sql).
 * Access is gated by a single per-resource Permission (app/Policies/Jewelry).
 */
class SupplierPaymentTermController extends BaseController
{
    public function index(Request $request)
    {
        $this->authorizeForUser(request()->user('api'), 'view', SupplierPaymentTerm::class);
        $perPage = (int) $request->input('limit', 15);
        $query = SupplierPaymentTerm::query();

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
        $this->authorizeForUser(request()->user('api'), 'create', SupplierPaymentTerm::class);
        $item = SupplierPaymentTerm::create($request->only((new SupplierPaymentTerm)->getFillable()));

        return $this->sendResponse($item, 'SupplierPaymentTerm created successfully.');
    }

    public function show($id)
    {
        $this->authorizeForUser(request()->user('api'), 'view', SupplierPaymentTerm::class);
        $item = SupplierPaymentTerm::findOrFail($id);

        return $this->sendResponse($item, 'SupplierPaymentTerm retrieved successfully.');
    }

    public function update(Request $request, $id)
    {
        $this->authorizeForUser(request()->user('api'), 'update', SupplierPaymentTerm::class);
        $item = SupplierPaymentTerm::findOrFail($id);
        $item->update($request->only($item->getFillable()));

        return $this->sendResponse($item, 'SupplierPaymentTerm updated successfully.');
    }

    public function destroy($id)
    {
        $this->authorizeForUser(request()->user('api'), 'delete', SupplierPaymentTerm::class);
        $item = SupplierPaymentTerm::findOrFail($id);
        $item->delete();

        return $this->sendResponse([], 'SupplierPaymentTerm deleted successfully.');
    }
}
