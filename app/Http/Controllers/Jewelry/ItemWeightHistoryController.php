<?php

namespace App\Http\Controllers\Jewelry;

use App\Http\Controllers\BaseController;
use App\Models\ItemWeightHistory;
use Illuminate\Http\Request;

/**
 * Generic CRUD for `item_weight_history` (SRS domain, database/jewelrydatabase.sql).
 * Access is gated by a single per-resource Permission (app/Policies/Jewelry).
 */
class ItemWeightHistoryController extends BaseController
{
    public function index(Request $request)
    {
        $this->authorizeForUser(request()->user('api'), 'view', ItemWeightHistory::class);
        $perPage = (int) $request->input('limit', 15);
        $query = ItemWeightHistory::query();

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
        $this->authorizeForUser(request()->user('api'), 'create', ItemWeightHistory::class);
        $item = ItemWeightHistory::create($request->only((new ItemWeightHistory)->getFillable()));

        return $this->sendResponse($item, 'ItemWeightHistory created successfully.');
    }

    public function show($id)
    {
        $this->authorizeForUser(request()->user('api'), 'view', ItemWeightHistory::class);
        $item = ItemWeightHistory::findOrFail($id);

        return $this->sendResponse($item, 'ItemWeightHistory retrieved successfully.');
    }

    public function update(Request $request, $id)
    {
        $this->authorizeForUser(request()->user('api'), 'update', ItemWeightHistory::class);
        $item = ItemWeightHistory::findOrFail($id);
        $item->update($request->only($item->getFillable()));

        return $this->sendResponse($item, 'ItemWeightHistory updated successfully.');
    }

    public function destroy($id)
    {
        $this->authorizeForUser(request()->user('api'), 'delete', ItemWeightHistory::class);
        $item = ItemWeightHistory::findOrFail($id);
        $item->delete();

        return $this->sendResponse([], 'ItemWeightHistory deleted successfully.');
    }
}
