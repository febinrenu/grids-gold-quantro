<?php

namespace App\Http\Controllers\Jewelry;

use App\Http\Controllers\BaseController;
use App\Models\PurchaseReturnItem;
use Illuminate\Http\Request;

/**
 * Generic CRUD for `purchase_return_items` (SRS domain, database/jewelrydatabase.sql).
 * Access is gated by a single per-resource Permission (app/Policies/Jewelry).
 */
class PurchaseReturnItemController extends BaseController
{
    public function index(Request $request)
    {
        $this->authorizeForUser(request()->user('api'), 'view', PurchaseReturnItem::class);
        $perPage = (int) $request->input('limit', 15);
        $query = PurchaseReturnItem::query();

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
        $this->authorizeForUser(request()->user('api'), 'create', PurchaseReturnItem::class);
        $item = PurchaseReturnItem::create($request->only((new PurchaseReturnItem)->getFillable()));

        return $this->sendResponse($item, 'PurchaseReturnItem created successfully.');
    }

    public function show($id)
    {
        $this->authorizeForUser(request()->user('api'), 'view', PurchaseReturnItem::class);
        $item = PurchaseReturnItem::findOrFail($id);

        return $this->sendResponse($item, 'PurchaseReturnItem retrieved successfully.');
    }

    public function update(Request $request, $id)
    {
        $this->authorizeForUser(request()->user('api'), 'update', PurchaseReturnItem::class);
        $item = PurchaseReturnItem::findOrFail($id);
        $item->update($request->only($item->getFillable()));

        return $this->sendResponse($item, 'PurchaseReturnItem updated successfully.');
    }

    public function destroy($id)
    {
        $this->authorizeForUser(request()->user('api'), 'delete', PurchaseReturnItem::class);
        $item = PurchaseReturnItem::findOrFail($id);
        $item->delete();

        return $this->sendResponse([], 'PurchaseReturnItem deleted successfully.');
    }
}
