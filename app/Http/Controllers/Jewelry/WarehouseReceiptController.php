<?php

namespace App\Http\Controllers\Jewelry;

use App\Http\Controllers\BaseController;
use App\Models\WarehouseReceipt;
use Illuminate\Http\Request;

/**
 * Generic CRUD for `warehouse_receipts` (SRS domain, database/jewelrydatabase.sql).
 * Access is gated by a single per-resource Permission (app/Policies/Jewelry).
 */
class WarehouseReceiptController extends BaseController
{
    public function index(Request $request)
    {
        $this->authorizeForUser(request()->user('api'), 'view', WarehouseReceipt::class);
        $perPage = (int) $request->input('limit', 15);
        $query = WarehouseReceipt::query();

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
        $this->authorizeForUser(request()->user('api'), 'create', WarehouseReceipt::class);
        $item = WarehouseReceipt::create($request->only((new WarehouseReceipt)->getFillable()));

        return $this->sendResponse($item, 'WarehouseReceipt created successfully.');
    }

    public function show($id)
    {
        $this->authorizeForUser(request()->user('api'), 'view', WarehouseReceipt::class);
        $item = WarehouseReceipt::findOrFail($id);

        return $this->sendResponse($item, 'WarehouseReceipt retrieved successfully.');
    }

    public function update(Request $request, $id)
    {
        $this->authorizeForUser(request()->user('api'), 'update', WarehouseReceipt::class);
        $item = WarehouseReceipt::findOrFail($id);
        $item->update($request->only($item->getFillable()));

        return $this->sendResponse($item, 'WarehouseReceipt updated successfully.');
    }

    public function destroy($id)
    {
        $this->authorizeForUser(request()->user('api'), 'delete', WarehouseReceipt::class);
        $item = WarehouseReceipt::findOrFail($id);
        $item->delete();

        return $this->sendResponse([], 'WarehouseReceipt deleted successfully.');
    }
}
