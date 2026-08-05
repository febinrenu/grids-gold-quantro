<?php

namespace App\Http\Controllers\Jewelry;

use App\Http\Controllers\BaseController;
use App\Models\ManufacturingReceiptItem;
use Illuminate\Http\Request;

/**
 * Generic CRUD for `manufacturing_receipt_items` (SRS domain, database/jewelrydatabase.sql).
 * Access is gated by a single per-resource Permission (app/Policies/Jewelry).
 */
class ManufacturingReceiptItemController extends BaseController
{
    public function index(Request $request)
    {
        $this->authorizeForUser(request()->user('api'), 'view', ManufacturingReceiptItem::class);
        $perPage = (int) $request->input('limit', 15);
        $query = ManufacturingReceiptItem::query();

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
        $this->authorizeForUser(request()->user('api'), 'create', ManufacturingReceiptItem::class);
        $item = ManufacturingReceiptItem::create($request->only((new ManufacturingReceiptItem)->getFillable()));

        return $this->sendResponse($item, 'ManufacturingReceiptItem created successfully.');
    }

    public function show($id)
    {
        $this->authorizeForUser(request()->user('api'), 'view', ManufacturingReceiptItem::class);
        $item = ManufacturingReceiptItem::findOrFail($id);

        return $this->sendResponse($item, 'ManufacturingReceiptItem retrieved successfully.');
    }

    public function update(Request $request, $id)
    {
        $this->authorizeForUser(request()->user('api'), 'update', ManufacturingReceiptItem::class);
        $item = ManufacturingReceiptItem::findOrFail($id);
        $item->update($request->only($item->getFillable()));

        return $this->sendResponse($item, 'ManufacturingReceiptItem updated successfully.');
    }

    public function destroy($id)
    {
        $this->authorizeForUser(request()->user('api'), 'delete', ManufacturingReceiptItem::class);
        $item = ManufacturingReceiptItem::findOrFail($id);
        $item->delete();

        return $this->sendResponse([], 'ManufacturingReceiptItem deleted successfully.');
    }
}
