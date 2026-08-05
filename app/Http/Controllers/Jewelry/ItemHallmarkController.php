<?php

namespace App\Http\Controllers\Jewelry;

use App\Http\Controllers\BaseController;
use App\Models\ItemHallmark;
use Illuminate\Http\Request;

/**
 * Generic CRUD for `item_hallmarks` (SRS domain, database/jewelrydatabase.sql).
 * Access is gated by a single per-resource Permission (app/Policies/Jewelry).
 */
class ItemHallmarkController extends BaseController
{
    public function index(Request $request)
    {
        $this->authorizeForUser(request()->user('api'), 'view', ItemHallmark::class);
        $perPage = (int) $request->input('limit', 15);
        $query = ItemHallmark::query();

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
        $this->authorizeForUser(request()->user('api'), 'create', ItemHallmark::class);
        $item = ItemHallmark::create($request->only((new ItemHallmark)->getFillable()));

        return $this->sendResponse($item, 'ItemHallmark created successfully.');
    }

    public function show($id)
    {
        $this->authorizeForUser(request()->user('api'), 'view', ItemHallmark::class);
        $item = ItemHallmark::findOrFail($id);

        return $this->sendResponse($item, 'ItemHallmark retrieved successfully.');
    }

    public function update(Request $request, $id)
    {
        $this->authorizeForUser(request()->user('api'), 'update', ItemHallmark::class);
        $item = ItemHallmark::findOrFail($id);
        $item->update($request->only($item->getFillable()));

        return $this->sendResponse($item, 'ItemHallmark updated successfully.');
    }

    public function destroy($id)
    {
        $this->authorizeForUser(request()->user('api'), 'delete', ItemHallmark::class);
        $item = ItemHallmark::findOrFail($id);
        $item->delete();

        return $this->sendResponse([], 'ItemHallmark deleted successfully.');
    }
}
