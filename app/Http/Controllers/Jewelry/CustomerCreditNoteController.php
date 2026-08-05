<?php

namespace App\Http\Controllers\Jewelry;

use App\Http\Controllers\BaseController;
use App\Models\CustomerCreditNote;
use Illuminate\Http\Request;

/**
 * Generic CRUD for `customer_credit_notes` (SRS domain, database/jewelrydatabase.sql).
 * Access is gated by a single per-resource Permission (app/Policies/Jewelry).
 */
class CustomerCreditNoteController extends BaseController
{
    public function index(Request $request)
    {
        $this->authorizeForUser(request()->user('api'), 'view', CustomerCreditNote::class);
        $perPage = (int) $request->input('limit', 15);
        $query = CustomerCreditNote::query();

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
        $this->authorizeForUser(request()->user('api'), 'create', CustomerCreditNote::class);
        $item = CustomerCreditNote::create($request->only((new CustomerCreditNote)->getFillable()));

        return $this->sendResponse($item, 'CustomerCreditNote created successfully.');
    }

    public function show($id)
    {
        $this->authorizeForUser(request()->user('api'), 'view', CustomerCreditNote::class);
        $item = CustomerCreditNote::findOrFail($id);

        return $this->sendResponse($item, 'CustomerCreditNote retrieved successfully.');
    }

    public function update(Request $request, $id)
    {
        $this->authorizeForUser(request()->user('api'), 'update', CustomerCreditNote::class);
        $item = CustomerCreditNote::findOrFail($id);
        $item->update($request->only($item->getFillable()));

        return $this->sendResponse($item, 'CustomerCreditNote updated successfully.');
    }

    public function destroy($id)
    {
        $this->authorizeForUser(request()->user('api'), 'delete', CustomerCreditNote::class);
        $item = CustomerCreditNote::findOrFail($id);
        $item->delete();

        return $this->sendResponse([], 'CustomerCreditNote deleted successfully.');
    }
}
