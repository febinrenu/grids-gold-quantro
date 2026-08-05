<?php

namespace App\Http\Controllers\Jewelry;

use App\Http\Controllers\BaseController;
use App\Models\CustomerDeposit;
use Illuminate\Http\Request;

/**
 * Generic CRUD for `customer_deposits` (SRS domain, database/jewelrydatabase.sql).
 * Access is gated by a single per-resource Permission (app/Policies/Jewelry).
 */
class CustomerDepositController extends BaseController
{
    public function index(Request $request)
    {
        $this->authorizeForUser(request()->user('api'), 'view', CustomerDeposit::class);
        $perPage = (int) $request->input('limit', 15);
        $query = CustomerDeposit::query();

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
        $this->authorizeForUser(request()->user('api'), 'create', CustomerDeposit::class);
        $item = CustomerDeposit::create($request->only((new CustomerDeposit)->getFillable()));

        return $this->sendResponse($item, 'CustomerDeposit created successfully.');
    }

    public function show($id)
    {
        $this->authorizeForUser(request()->user('api'), 'view', CustomerDeposit::class);
        $item = CustomerDeposit::findOrFail($id);

        return $this->sendResponse($item, 'CustomerDeposit retrieved successfully.');
    }

    public function update(Request $request, $id)
    {
        $this->authorizeForUser(request()->user('api'), 'update', CustomerDeposit::class);
        $item = CustomerDeposit::findOrFail($id);
        $item->update($request->only($item->getFillable()));

        return $this->sendResponse($item, 'CustomerDeposit updated successfully.');
    }

    public function destroy($id)
    {
        $this->authorizeForUser(request()->user('api'), 'delete', CustomerDeposit::class);
        $item = CustomerDeposit::findOrFail($id);
        $item->delete();

        return $this->sendResponse([], 'CustomerDeposit deleted successfully.');
    }
}
