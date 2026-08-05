<?php

namespace App\Http\Controllers\Jewelry;

use App\Http\Controllers\BaseController;
use App\Models\ItemImage;
use Illuminate\Http\Request;

/**
 * Generic CRUD for `item_images` (SRS domain, database/jewelrydatabase.sql).
 * Access is gated by a single per-resource Permission (app/Policies/Jewelry).
 */
class ItemImageController extends BaseController
{
    public function index(Request $request)
    {
        $this->authorizeForUser(request()->user('api'), 'view', ItemImage::class);
        $perPage = (int) $request->input('limit', 15);
        $query = ItemImage::query();

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
        $this->authorizeForUser(request()->user('api'), 'create', ItemImage::class);
        $item = ItemImage::create($request->only((new ItemImage)->getFillable()));

        return $this->sendResponse($item, 'ItemImage created successfully.');
    }

    public function show($id)
    {
        $this->authorizeForUser(request()->user('api'), 'view', ItemImage::class);
        $item = ItemImage::findOrFail($id);

        return $this->sendResponse($item, 'ItemImage retrieved successfully.');
    }

    public function update(Request $request, $id)
    {
        $this->authorizeForUser(request()->user('api'), 'update', ItemImage::class);
        $item = ItemImage::findOrFail($id);
        $item->update($request->only($item->getFillable()));

        return $this->sendResponse($item, 'ItemImage updated successfully.');
    }

    public function destroy($id)
    {
        $this->authorizeForUser(request()->user('api'), 'delete', ItemImage::class);
        $item = ItemImage::findOrFail($id);
        $item->delete();

        return $this->sendResponse([], 'ItemImage deleted successfully.');
    }
}
