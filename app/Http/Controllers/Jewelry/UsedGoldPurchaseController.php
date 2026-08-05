<?php

namespace App\Http\Controllers\Jewelry;

use App\Http\Controllers\BaseController;
use App\Models\UsedGoldPurchase;
use Illuminate\Http\Request;

/**
 * Generic CRUD for `used_gold_purchases` (SRS domain, database/jewelrydatabase.sql).
 * Access is gated by a single per-resource Permission (app/Policies/Jewelry).
 */
class UsedGoldPurchaseController extends BaseController
{
    public function index(Request $request)
    {
        $this->authorizeForUser(request()->user('api'), 'view', UsedGoldPurchase::class);
        $perPage = (int) $request->input('limit', 15);
        $query = UsedGoldPurchase::query();

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
        $this->authorizeForUser(request()->user('api'), 'create', UsedGoldPurchase::class);
        $item = UsedGoldPurchase::create($request->only((new UsedGoldPurchase)->getFillable()));

        return $this->sendResponse($item, 'UsedGoldPurchase created successfully.');
    }

    public function show($id)
    {
        $this->authorizeForUser(request()->user('api'), 'view', UsedGoldPurchase::class);
        $item = UsedGoldPurchase::findOrFail($id);

        return $this->sendResponse($item, 'UsedGoldPurchase retrieved successfully.');
    }

    public function update(Request $request, $id)
    {
        $this->authorizeForUser(request()->user('api'), 'update', UsedGoldPurchase::class);
        $item = UsedGoldPurchase::findOrFail($id);
        $item->update($request->only($item->getFillable()));

        return $this->sendResponse($item, 'UsedGoldPurchase updated successfully.');
    }

    public function destroy($id)
    {
        $this->authorizeForUser(request()->user('api'), 'delete', UsedGoldPurchase::class);
        $item = UsedGoldPurchase::findOrFail($id);
        $item->delete();

        return $this->sendResponse([], 'UsedGoldPurchase deleted successfully.');
    }
}
