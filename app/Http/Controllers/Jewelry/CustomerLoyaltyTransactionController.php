<?php

namespace App\Http\Controllers\Jewelry;

use App\Http\Controllers\BaseController;
use App\Models\CustomerLoyaltyTransaction;
use Illuminate\Http\Request;

/**
 * Generic CRUD for `customer_loyalty_transactions` (SRS domain, database/jewelrydatabase.sql).
 * Access is gated by a single per-resource Permission (app/Policies/Jewelry).
 */
class CustomerLoyaltyTransactionController extends BaseController
{
    public function index(Request $request)
    {
        $this->authorizeForUser(request()->user('api'), 'view', CustomerLoyaltyTransaction::class);
        $perPage = (int) $request->input('limit', 15);
        $query = CustomerLoyaltyTransaction::query();

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
        $this->authorizeForUser(request()->user('api'), 'create', CustomerLoyaltyTransaction::class);
        $item = CustomerLoyaltyTransaction::create($request->only((new CustomerLoyaltyTransaction)->getFillable()));

        return $this->sendResponse($item, 'CustomerLoyaltyTransaction created successfully.');
    }

    public function show($id)
    {
        $this->authorizeForUser(request()->user('api'), 'view', CustomerLoyaltyTransaction::class);
        $item = CustomerLoyaltyTransaction::findOrFail($id);

        return $this->sendResponse($item, 'CustomerLoyaltyTransaction retrieved successfully.');
    }

    public function update(Request $request, $id)
    {
        $this->authorizeForUser(request()->user('api'), 'update', CustomerLoyaltyTransaction::class);
        $item = CustomerLoyaltyTransaction::findOrFail($id);
        $item->update($request->only($item->getFillable()));

        return $this->sendResponse($item, 'CustomerLoyaltyTransaction updated successfully.');
    }

    public function destroy($id)
    {
        $this->authorizeForUser(request()->user('api'), 'delete', CustomerLoyaltyTransaction::class);
        $item = CustomerLoyaltyTransaction::findOrFail($id);
        $item->delete();

        return $this->sendResponse([], 'CustomerLoyaltyTransaction deleted successfully.');
    }
}
