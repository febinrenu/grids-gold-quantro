<?php

namespace App\Http\Controllers\Jewelry;

use App\Http\Controllers\BaseController;
use App\Models\UsedGoldPurchaseItem;
use Illuminate\Http\Request;

/**
 * Generic CRUD for `used_gold_purchase_items` (SRS domain, database/jewelrydatabase.sql).
 * Access is gated by a single per-resource Permission (app/Policies/Jewelry).
 */
class UsedGoldPurchaseItemController extends BaseController
{
    public function index(Request $request)
    {
        $this->authorizeForUser(request()->user('api'), 'view', UsedGoldPurchaseItem::class);
        $perPage = (int) $request->input('limit', 15);
        $query = UsedGoldPurchaseItem::query();

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
        $this->authorizeForUser(request()->user('api'), 'create', UsedGoldPurchaseItem::class);
        $item = UsedGoldPurchaseItem::create($request->only((new UsedGoldPurchaseItem)->getFillable()));

        return $this->sendResponse($item, 'UsedGoldPurchaseItem created successfully.');
    }

    public function show($id)
    {
        $this->authorizeForUser(request()->user('api'), 'view', UsedGoldPurchaseItem::class);
        $item = UsedGoldPurchaseItem::findOrFail($id);

        return $this->sendResponse($item, 'UsedGoldPurchaseItem retrieved successfully.');
    }

    public function update(Request $request, $id)
    {
        $this->authorizeForUser(request()->user('api'), 'update', UsedGoldPurchaseItem::class);
        $item = UsedGoldPurchaseItem::findOrFail($id);
        $item->update($request->only($item->getFillable()));

        return $this->sendResponse($item, 'UsedGoldPurchaseItem updated successfully.');
    }

    public function destroy($id)
    {
        $this->authorizeForUser(request()->user('api'), 'delete', UsedGoldPurchaseItem::class);
        $item = UsedGoldPurchaseItem::findOrFail($id);
        $item->delete();

        return $this->sendResponse([], 'UsedGoldPurchaseItem deleted successfully.');
    }
}
