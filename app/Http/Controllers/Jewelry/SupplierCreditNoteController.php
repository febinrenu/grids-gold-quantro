<?php

namespace App\Http\Controllers\Jewelry;

use App\Http\Controllers\BaseController;
use App\Models\SupplierCreditNote;
use Illuminate\Http\Request;

/**
 * Generic CRUD for `supplier_credit_notes` (SRS domain, database/jewelrydatabase.sql).
 * Access is gated by a single per-resource Permission (app/Policies/Jewelry).
 */
class SupplierCreditNoteController extends BaseController
{
    public function index(Request $request)
    {
        $this->authorizeForUser(request()->user('api'), 'view', SupplierCreditNote::class);
        $perPage = (int) $request->input('limit', 15);
        $query = SupplierCreditNote::query();

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
        $this->authorizeForUser(request()->user('api'), 'create', SupplierCreditNote::class);
        $item = SupplierCreditNote::create($request->only((new SupplierCreditNote)->getFillable()));

        return $this->sendResponse($item, 'SupplierCreditNote created successfully.');
    }

    public function show($id)
    {
        $this->authorizeForUser(request()->user('api'), 'view', SupplierCreditNote::class);
        $item = SupplierCreditNote::findOrFail($id);

        return $this->sendResponse($item, 'SupplierCreditNote retrieved successfully.');
    }

    public function update(Request $request, $id)
    {
        $this->authorizeForUser(request()->user('api'), 'update', SupplierCreditNote::class);
        $item = SupplierCreditNote::findOrFail($id);
        $item->update($request->only($item->getFillable()));

        return $this->sendResponse($item, 'SupplierCreditNote updated successfully.');
    }

    public function destroy($id)
    {
        $this->authorizeForUser(request()->user('api'), 'delete', SupplierCreditNote::class);
        $item = SupplierCreditNote::findOrFail($id);
        $item->delete();

        return $this->sendResponse([], 'SupplierCreditNote deleted successfully.');
    }
}
