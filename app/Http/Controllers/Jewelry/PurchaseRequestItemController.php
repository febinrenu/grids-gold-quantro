<?php

namespace App\Http\Controllers\Jewelry;

use App\Http\Controllers\BaseController;
use App\Models\PurchaseRequestItem;
use Illuminate\Http\Request;

/**
 * Generic CRUD for `purchase_request_items` (SRS domain, database/jewelrydatabase.sql).
 * Access is gated by a single per-resource Permission (app/Policies/Jewelry).
 */
class PurchaseRequestItemController extends BaseController
{
    public function index(Request $request)
    {
        $this->authorizeForUser(request()->user('api'), 'view', PurchaseRequestItem::class);
        $perPage = (int) $request->input('limit', 15);
        $query = PurchaseRequestItem::query();

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
        $this->authorizeForUser(request()->user('api'), 'create', PurchaseRequestItem::class);
        $item = PurchaseRequestItem::create($request->only((new PurchaseRequestItem)->getFillable()));

        return $this->sendResponse($item, 'PurchaseRequestItem created successfully.');
    }

    public function show($id)
    {
        $this->authorizeForUser(request()->user('api'), 'view', PurchaseRequestItem::class);
        $item = PurchaseRequestItem::findOrFail($id);

        return $this->sendResponse($item, 'PurchaseRequestItem retrieved successfully.');
    }

    public function update(Request $request, $id)
    {
        $this->authorizeForUser(request()->user('api'), 'update', PurchaseRequestItem::class);
        $item = PurchaseRequestItem::findOrFail($id);
        $item->update($request->only($item->getFillable()));

        return $this->sendResponse($item, 'PurchaseRequestItem updated successfully.');
    }

    public function destroy($id)
    {
        $this->authorizeForUser(request()->user('api'), 'delete', PurchaseRequestItem::class);
        $item = PurchaseRequestItem::findOrFail($id);
        $item->delete();

        return $this->sendResponse([], 'PurchaseRequestItem deleted successfully.');
    }
}
