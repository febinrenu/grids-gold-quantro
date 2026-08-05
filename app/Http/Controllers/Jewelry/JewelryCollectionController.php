<?php

namespace App\Http\Controllers\Jewelry;

use App\Http\Controllers\BaseController;
use App\Models\JewelryCollection;
use Illuminate\Http\Request;

/**
 * Generic CRUD for `jewelry_collections` (SRS domain, database/jewelrydatabase.sql).
 * Access is gated by a single per-resource Permission (app/Policies/Jewelry).
 */
class JewelryCollectionController extends BaseController
{
    public function index(Request $request)
    {
        $this->authorizeForUser(request()->user('api'), 'view', JewelryCollection::class);
        $perPage = (int) $request->input('limit', 15);
        $query = JewelryCollection::query();

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
        $this->authorizeForUser(request()->user('api'), 'create', JewelryCollection::class);
        $item = JewelryCollection::create($request->only((new JewelryCollection)->getFillable()));

        return $this->sendResponse($item, 'JewelryCollection created successfully.');
    }

    public function show($id)
    {
        $this->authorizeForUser(request()->user('api'), 'view', JewelryCollection::class);
        $item = JewelryCollection::findOrFail($id);

        return $this->sendResponse($item, 'JewelryCollection retrieved successfully.');
    }

    public function update(Request $request, $id)
    {
        $this->authorizeForUser(request()->user('api'), 'update', JewelryCollection::class);
        $item = JewelryCollection::findOrFail($id);
        $item->update($request->only($item->getFillable()));

        return $this->sendResponse($item, 'JewelryCollection updated successfully.');
    }

    public function destroy($id)
    {
        $this->authorizeForUser(request()->user('api'), 'delete', JewelryCollection::class);
        $item = JewelryCollection::findOrFail($id);
        $item->delete();

        return $this->sendResponse([], 'JewelryCollection deleted successfully.');
    }
}
