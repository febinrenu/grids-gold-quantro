<?php

namespace App\Http\Controllers\Jewelry;

use App\Http\Controllers\BaseController;
use App\Models\GoodsReceiptItem;
use Illuminate\Http\Request;

/**
 * Generic CRUD for `goods_receipt_items` (SRS domain, database/jewelrydatabase.sql).
 * Access is gated by a single per-resource Permission (app/Policies/Jewelry).
 */
class GoodsReceiptItemController extends BaseController
{
    public function index(Request $request)
    {
        $this->authorizeForUser(request()->user('api'), 'view', GoodsReceiptItem::class);
        $perPage = (int) $request->input('limit', 15);
        $query = GoodsReceiptItem::query();

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
        $this->authorizeForUser(request()->user('api'), 'create', GoodsReceiptItem::class);
        $item = GoodsReceiptItem::create($request->only((new GoodsReceiptItem)->getFillable()));

        return $this->sendResponse($item, 'GoodsReceiptItem created successfully.');
    }

    public function show($id)
    {
        $this->authorizeForUser(request()->user('api'), 'view', GoodsReceiptItem::class);
        $item = GoodsReceiptItem::findOrFail($id);

        return $this->sendResponse($item, 'GoodsReceiptItem retrieved successfully.');
    }

    public function update(Request $request, $id)
    {
        $this->authorizeForUser(request()->user('api'), 'update', GoodsReceiptItem::class);
        $item = GoodsReceiptItem::findOrFail($id);
        $item->update($request->only($item->getFillable()));

        return $this->sendResponse($item, 'GoodsReceiptItem updated successfully.');
    }

    public function destroy($id)
    {
        $this->authorizeForUser(request()->user('api'), 'delete', GoodsReceiptItem::class);
        $item = GoodsReceiptItem::findOrFail($id);
        $item->delete();

        return $this->sendResponse([], 'GoodsReceiptItem deleted successfully.');
    }
}
