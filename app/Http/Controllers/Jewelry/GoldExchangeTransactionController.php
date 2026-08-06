<?php

namespace App\Http\Controllers\Jewelry;

use App\Http\Controllers\BaseController;
use App\Models\GoldExchangeTransaction;
use Illuminate\Http\Request;

/**
 * Generic CRUD for `gold_exchange_transactions` (SRS domain, database/jewelrydatabase.sql).
 * Access is gated by a single per-resource Permission (app/Policies/Jewelry).
 */
class GoldExchangeTransactionController extends BaseController
{
    public function index(Request $request)
    {
        $this->authorizeForUser(request()->user('api'), 'view', GoldExchangeTransaction::class);
        $perPage = (int) $request->input('limit', 15);
        $query = GoldExchangeTransaction::query();

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
        $this->authorizeForUser(request()->user('api'), 'create', GoldExchangeTransaction::class);
        $item = GoldExchangeTransaction::create($request->only((new GoldExchangeTransaction)->getFillable()));

        return $this->sendResponse($item, 'GoldExchangeTransaction created successfully.');
    }

    public function show($id)
    {
        $this->authorizeForUser(request()->user('api'), 'view', GoldExchangeTransaction::class);
        $item = GoldExchangeTransaction::findOrFail($id);

        return $this->sendResponse($item, 'GoldExchangeTransaction retrieved successfully.');
    }

    public function update(Request $request, $id)
    {
        $this->authorizeForUser(request()->user('api'), 'update', GoldExchangeTransaction::class);
        $item = GoldExchangeTransaction::findOrFail($id);
        $item->update($request->only($item->getFillable()));

        return $this->sendResponse($item, 'GoldExchangeTransaction updated successfully.');
    }

    public function destroy($id)
    {
        $this->authorizeForUser(request()->user('api'), 'delete', GoldExchangeTransaction::class);
        $item = GoldExchangeTransaction::findOrFail($id);
        $item->delete();

        return $this->sendResponse([], 'GoldExchangeTransaction deleted successfully.');
    }
}
