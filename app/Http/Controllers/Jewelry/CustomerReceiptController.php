<?php

namespace App\Http\Controllers\Jewelry;

use App\Http\Controllers\BaseController;
use App\Models\CustomerReceipt;
use Illuminate\Http\Request;

/**
 * Generic CRUD for `customer_receipts` (SRS domain, database/jewelrydatabase.sql).
 * Access is gated by a single per-resource Permission (app/Policies/Jewelry).
 */
class CustomerReceiptController extends BaseController
{
    public function index(Request $request)
    {
        $this->authorizeForUser(request()->user('api'), 'view', CustomerReceipt::class);
        $perPage = (int) $request->input('limit', 15);
        $query = CustomerReceipt::query();

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
        $this->authorizeForUser(request()->user('api'), 'create', CustomerReceipt::class);
        $item = CustomerReceipt::create($request->only((new CustomerReceipt)->getFillable()));

        return $this->sendResponse($item, 'CustomerReceipt created successfully.');
    }

    public function show($id)
    {
        $this->authorizeForUser(request()->user('api'), 'view', CustomerReceipt::class);
        $item = CustomerReceipt::findOrFail($id);

        return $this->sendResponse($item, 'CustomerReceipt retrieved successfully.');
    }

    public function update(Request $request, $id)
    {
        $this->authorizeForUser(request()->user('api'), 'update', CustomerReceipt::class);
        $item = CustomerReceipt::findOrFail($id);
        $item->update($request->only($item->getFillable()));

        return $this->sendResponse($item, 'CustomerReceipt updated successfully.');
    }

    public function destroy($id)
    {
        $this->authorizeForUser(request()->user('api'), 'delete', CustomerReceipt::class);
        $item = CustomerReceipt::findOrFail($id);
        $item->delete();

        return $this->sendResponse([], 'CustomerReceipt deleted successfully.');
    }
}
