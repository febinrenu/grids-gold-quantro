<?php

namespace App\Http\Controllers\Jewelry;

use App\Http\Controllers\BaseController;
use App\Models\GoldBalance;
use Illuminate\Http\Request;

/**
 * Generic CRUD for `gold_balances` (SRS domain, database/jewelrydatabase.sql).
 * Access is gated by a single per-resource Permission (app/Policies/Jewelry).
 */
class GoldBalanceController extends BaseController
{
    public function index(Request $request)
    {
        $this->authorizeForUser(request()->user('api'), 'view', GoldBalance::class);
        $perPage = (int) $request->input('limit', 15);
        $query = GoldBalance::query();

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
        $this->authorizeForUser(request()->user('api'), 'create', GoldBalance::class);
        $item = GoldBalance::create($request->only((new GoldBalance)->getFillable()));

        return $this->sendResponse($item, 'GoldBalance created successfully.');
    }

    public function show($id)
    {
        $this->authorizeForUser(request()->user('api'), 'view', GoldBalance::class);
        $item = GoldBalance::findOrFail($id);

        return $this->sendResponse($item, 'GoldBalance retrieved successfully.');
    }

    public function update(Request $request, $id)
    {
        $this->authorizeForUser(request()->user('api'), 'update', GoldBalance::class);
        $item = GoldBalance::findOrFail($id);
        $item->update($request->only($item->getFillable()));

        return $this->sendResponse($item, 'GoldBalance updated successfully.');
    }

    public function destroy($id)
    {
        $this->authorizeForUser(request()->user('api'), 'delete', GoldBalance::class);
        $item = GoldBalance::findOrFail($id);
        $item->delete();

        return $this->sendResponse([], 'GoldBalance deleted successfully.');
    }
}
