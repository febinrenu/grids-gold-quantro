<?php

namespace App\Http\Controllers\Jewelry;

use App\Http\Controllers\BaseController;
use App\Models\GoldPriceHistory;
use Illuminate\Http\Request;

/**
 * Generic CRUD for `gold_price_history` (SRS domain, database/jewelrydatabase.sql).
 * Access is gated by a single per-resource Permission (app/Policies/Jewelry).
 */
class GoldPriceHistoryController extends BaseController
{
    public function index(Request $request)
    {
        $this->authorizeForUser(request()->user('api'), 'view', GoldPriceHistory::class);
        $perPage = (int) $request->input('limit', 15);
        $query = GoldPriceHistory::query();

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
        $this->authorizeForUser(request()->user('api'), 'create', GoldPriceHistory::class);
        $item = GoldPriceHistory::create($request->only((new GoldPriceHistory)->getFillable()));

        return $this->sendResponse($item, 'GoldPriceHistory created successfully.');
    }

    public function show($id)
    {
        $this->authorizeForUser(request()->user('api'), 'view', GoldPriceHistory::class);
        $item = GoldPriceHistory::findOrFail($id);

        return $this->sendResponse($item, 'GoldPriceHistory retrieved successfully.');
    }

    public function update(Request $request, $id)
    {
        $this->authorizeForUser(request()->user('api'), 'update', GoldPriceHistory::class);
        $item = GoldPriceHistory::findOrFail($id);
        $item->update($request->only($item->getFillable()));

        return $this->sendResponse($item, 'GoldPriceHistory updated successfully.');
    }

    public function destroy($id)
    {
        $this->authorizeForUser(request()->user('api'), 'delete', GoldPriceHistory::class);
        $item = GoldPriceHistory::findOrFail($id);
        $item->delete();

        return $this->sendResponse([], 'GoldPriceHistory deleted successfully.');
    }
}
