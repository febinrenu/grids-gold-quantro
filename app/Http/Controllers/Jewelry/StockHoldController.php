<?php

namespace App\Http\Controllers\Jewelry;

use App\Http\Controllers\BaseController;
use App\Models\StockHold;
use Illuminate\Http\Request;

/**
 * Generic CRUD for `stock_holds` (SRS domain, database/jewelrydatabase.sql).
 * Access is gated by a single per-resource Permission (app/Policies/Jewelry).
 */
class StockHoldController extends BaseController
{
    public function index(Request $request)
    {
        $this->authorizeForUser(request()->user('api'), 'view', StockHold::class);
        $perPage = (int) $request->input('limit', 15);
        $query = StockHold::query();

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
        $this->authorizeForUser(request()->user('api'), 'create', StockHold::class);
        $item = StockHold::create($request->only((new StockHold)->getFillable()));

        return $this->sendResponse($item, 'StockHold created successfully.');
    }

    public function show($id)
    {
        $this->authorizeForUser(request()->user('api'), 'view', StockHold::class);
        $item = StockHold::findOrFail($id);

        return $this->sendResponse($item, 'StockHold retrieved successfully.');
    }

    public function update(Request $request, $id)
    {
        $this->authorizeForUser(request()->user('api'), 'update', StockHold::class);
        $item = StockHold::findOrFail($id);
        $item->update($request->only($item->getFillable()));

        return $this->sendResponse($item, 'StockHold updated successfully.');
    }

    public function destroy($id)
    {
        $this->authorizeForUser(request()->user('api'), 'delete', StockHold::class);
        $item = StockHold::findOrFail($id);
        $item->delete();

        return $this->sendResponse([], 'StockHold deleted successfully.');
    }
}
