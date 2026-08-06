<?php

namespace App\Http\Controllers\Jewelry;

use App\Http\Controllers\BaseController;
use App\Models\InventoryBatch;
use Illuminate\Http\Request;

/**
 * Generic CRUD for `inventory_batches` (SRS domain, database/jewelrydatabase.sql).
 * Access is gated by a single per-resource Permission (app/Policies/Jewelry).
 */
class InventoryBatchController extends BaseController
{
    public function index(Request $request)
    {
        $this->authorizeForUser(request()->user('api'), 'view', InventoryBatch::class);
        $perPage = (int) $request->input('limit', 15);
        $query = InventoryBatch::query();

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
        $this->authorizeForUser(request()->user('api'), 'create', InventoryBatch::class);
        $item = InventoryBatch::create($request->only((new InventoryBatch)->getFillable()));

        return $this->sendResponse($item, 'InventoryBatch created successfully.');
    }

    public function show($id)
    {
        $this->authorizeForUser(request()->user('api'), 'view', InventoryBatch::class);
        $item = InventoryBatch::findOrFail($id);

        return $this->sendResponse($item, 'InventoryBatch retrieved successfully.');
    }

    public function update(Request $request, $id)
    {
        $this->authorizeForUser(request()->user('api'), 'update', InventoryBatch::class);
        $item = InventoryBatch::findOrFail($id);
        $item->update($request->only($item->getFillable()));

        return $this->sendResponse($item, 'InventoryBatch updated successfully.');
    }

    public function destroy($id)
    {
        $this->authorizeForUser(request()->user('api'), 'delete', InventoryBatch::class);
        $item = InventoryBatch::findOrFail($id);
        $item->delete();

        return $this->sendResponse([], 'InventoryBatch deleted successfully.');
    }
}
