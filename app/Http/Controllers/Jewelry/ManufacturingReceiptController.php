<?php

namespace App\Http\Controllers\Jewelry;

use App\Http\Controllers\BaseController;
use App\Models\ManufacturingReceipt;
use Illuminate\Http\Request;

/**
 * Generic CRUD for `manufacturing_receipts` (SRS domain, database/jewelrydatabase.sql).
 * Access is gated by a single per-resource Permission (app/Policies/Jewelry).
 */
class ManufacturingReceiptController extends BaseController
{
    public function index(Request $request)
    {
        $this->authorizeForUser(request()->user('api'), 'view', ManufacturingReceipt::class);
        $perPage = (int) $request->input('limit', 15);
        $query = ManufacturingReceipt::query();

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
        $this->authorizeForUser(request()->user('api'), 'create', ManufacturingReceipt::class);
        $item = ManufacturingReceipt::create($request->only((new ManufacturingReceipt)->getFillable()));

        return $this->sendResponse($item, 'ManufacturingReceipt created successfully.');
    }

    public function show($id)
    {
        $this->authorizeForUser(request()->user('api'), 'view', ManufacturingReceipt::class);
        $item = ManufacturingReceipt::findOrFail($id);

        return $this->sendResponse($item, 'ManufacturingReceipt retrieved successfully.');
    }

    public function update(Request $request, $id)
    {
        $this->authorizeForUser(request()->user('api'), 'update', ManufacturingReceipt::class);
        $item = ManufacturingReceipt::findOrFail($id);
        $item->update($request->only($item->getFillable()));

        return $this->sendResponse($item, 'ManufacturingReceipt updated successfully.');
    }

    public function destroy($id)
    {
        $this->authorizeForUser(request()->user('api'), 'delete', ManufacturingReceipt::class);
        $item = ManufacturingReceipt::findOrFail($id);
        $item->delete();

        return $this->sendResponse([], 'ManufacturingReceipt deleted successfully.');
    }
}
