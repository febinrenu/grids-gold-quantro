<?php

namespace App\Http\Controllers\Jewelry;

use App\Http\Controllers\BaseController;
use App\Models\GoodsReceipt;
use Illuminate\Http\Request;

/**
 * Generic CRUD for `goods_receipts` (SRS domain, database/jewelrydatabase.sql).
 * Access is gated by a single per-resource Permission (app/Policies/Jewelry).
 */
class GoodsReceiptController extends BaseController
{
    public function index(Request $request)
    {
        $this->authorizeForUser(request()->user('api'), 'view', GoodsReceipt::class);
        $perPage = (int) $request->input('limit', 15);
        $query = GoodsReceipt::query();

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
        $this->authorizeForUser(request()->user('api'), 'create', GoodsReceipt::class);
        $item = GoodsReceipt::create($request->only((new GoodsReceipt)->getFillable()));

        return $this->sendResponse($item, 'GoodsReceipt created successfully.');
    }

    public function show($id)
    {
        $this->authorizeForUser(request()->user('api'), 'view', GoodsReceipt::class);
        $item = GoodsReceipt::findOrFail($id);

        return $this->sendResponse($item, 'GoodsReceipt retrieved successfully.');
    }

    public function update(Request $request, $id)
    {
        $this->authorizeForUser(request()->user('api'), 'update', GoodsReceipt::class);
        $item = GoodsReceipt::findOrFail($id);
        $item->update($request->only($item->getFillable()));

        return $this->sendResponse($item, 'GoodsReceipt updated successfully.');
    }

    public function destroy($id)
    {
        $this->authorizeForUser(request()->user('api'), 'delete', GoodsReceipt::class);
        $item = GoodsReceipt::findOrFail($id);
        $item->delete();

        return $this->sendResponse([], 'GoodsReceipt deleted successfully.');
    }
}
