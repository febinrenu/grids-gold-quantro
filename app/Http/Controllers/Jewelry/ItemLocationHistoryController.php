<?php

namespace App\Http\Controllers\Jewelry;

use App\Http\Controllers\BaseController;
use App\Models\ItemLocationHistory;
use Illuminate\Http\Request;

/**
 * Generic CRUD for `item_location_history` (SRS domain, database/jewelrydatabase.sql).
 * Access is gated by a single per-resource Permission (app/Policies/Jewelry).
 */
class ItemLocationHistoryController extends BaseController
{
    public function index(Request $request)
    {
        $this->authorizeForUser(request()->user('api'), 'view', ItemLocationHistory::class);
        $perPage = (int) $request->input('limit', 15);
        $query = ItemLocationHistory::query();

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
        $this->authorizeForUser(request()->user('api'), 'create', ItemLocationHistory::class);
        $item = ItemLocationHistory::create($request->only((new ItemLocationHistory)->getFillable()));

        return $this->sendResponse($item, 'ItemLocationHistory created successfully.');
    }

    public function show($id)
    {
        $this->authorizeForUser(request()->user('api'), 'view', ItemLocationHistory::class);
        $item = ItemLocationHistory::findOrFail($id);

        return $this->sendResponse($item, 'ItemLocationHistory retrieved successfully.');
    }

    public function update(Request $request, $id)
    {
        $this->authorizeForUser(request()->user('api'), 'update', ItemLocationHistory::class);
        $item = ItemLocationHistory::findOrFail($id);
        $item->update($request->only($item->getFillable()));

        return $this->sendResponse($item, 'ItemLocationHistory updated successfully.');
    }

    public function destroy($id)
    {
        $this->authorizeForUser(request()->user('api'), 'delete', ItemLocationHistory::class);
        $item = ItemLocationHistory::findOrFail($id);
        $item->delete();

        return $this->sendResponse([], 'ItemLocationHistory deleted successfully.');
    }
}
