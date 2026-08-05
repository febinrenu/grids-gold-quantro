<?php

namespace App\Http\Controllers\Jewelry;

use App\Http\Controllers\BaseController;
use App\Models\TransferItem;
use Illuminate\Http\Request;

/**
 * Generic CRUD for `transfer_items` (SRS domain, database/jewelrydatabase.sql).
 * Access is gated by a single per-resource Permission (app/Policies/Jewelry).
 */
class TransferItemController extends BaseController
{
    public function index(Request $request)
    {
        $this->authorizeForUser(request()->user('api'), 'view', TransferItem::class);
        $perPage = (int) $request->input('limit', 15);
        $query = TransferItem::query();

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
        $this->authorizeForUser(request()->user('api'), 'create', TransferItem::class);
        $item = TransferItem::create($request->only((new TransferItem)->getFillable()));

        return $this->sendResponse($item, 'TransferItem created successfully.');
    }

    public function show($id)
    {
        $this->authorizeForUser(request()->user('api'), 'view', TransferItem::class);
        $item = TransferItem::findOrFail($id);

        return $this->sendResponse($item, 'TransferItem retrieved successfully.');
    }

    public function update(Request $request, $id)
    {
        $this->authorizeForUser(request()->user('api'), 'update', TransferItem::class);
        $item = TransferItem::findOrFail($id);
        $item->update($request->only($item->getFillable()));

        return $this->sendResponse($item, 'TransferItem updated successfully.');
    }

    public function destroy($id)
    {
        $this->authorizeForUser(request()->user('api'), 'delete', TransferItem::class);
        $item = TransferItem::findOrFail($id);
        $item->delete();

        return $this->sendResponse([], 'TransferItem deleted successfully.');
    }
}
