<?php

namespace App\Http\Controllers\Jewelry;

use App\Http\Controllers\BaseController;
use App\Models\GoldBalanceHistory;
use Illuminate\Http\Request;

/**
 * Generic CRUD for `gold_balance_history` (SRS domain, database/jewelrydatabase.sql).
 * Access is gated by a single per-resource Permission (app/Policies/Jewelry).
 */
class GoldBalanceHistoryController extends BaseController
{
    public function index(Request $request)
    {
        $this->authorizeForUser(request()->user('api'), 'view', GoldBalanceHistory::class);
        $perPage = (int) $request->input('limit', 15);
        $query = GoldBalanceHistory::query();

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
        $this->authorizeForUser(request()->user('api'), 'create', GoldBalanceHistory::class);
        $item = GoldBalanceHistory::create($request->only((new GoldBalanceHistory)->getFillable()));

        return $this->sendResponse($item, 'GoldBalanceHistory created successfully.');
    }

    public function show($id)
    {
        $this->authorizeForUser(request()->user('api'), 'view', GoldBalanceHistory::class);
        $item = GoldBalanceHistory::findOrFail($id);

        return $this->sendResponse($item, 'GoldBalanceHistory retrieved successfully.');
    }

    public function update(Request $request, $id)
    {
        $this->authorizeForUser(request()->user('api'), 'update', GoldBalanceHistory::class);
        $item = GoldBalanceHistory::findOrFail($id);
        $item->update($request->only($item->getFillable()));

        return $this->sendResponse($item, 'GoldBalanceHistory updated successfully.');
    }

    public function destroy($id)
    {
        $this->authorizeForUser(request()->user('api'), 'delete', GoldBalanceHistory::class);
        $item = GoldBalanceHistory::findOrFail($id);
        $item->delete();

        return $this->sendResponse([], 'GoldBalanceHistory deleted successfully.');
    }
}
