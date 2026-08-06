<?php

namespace App\Http\Controllers\Jewelry;

use App\Http\Controllers\BaseController;
use App\Models\BarcodeRegistry;
use Illuminate\Http\Request;

/**
 * Generic CRUD for `barcode_registry` (SRS domain, database/jewelrydatabase.sql).
 * Access is gated by a single per-resource Permission (app/Policies/Jewelry).
 */
class BarcodeRegistryController extends BaseController
{
    public function index(Request $request)
    {
        $this->authorizeForUser(request()->user('api'), 'view', BarcodeRegistry::class);
        $perPage = (int) $request->input('limit', 15);
        $query = BarcodeRegistry::query();

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
        $this->authorizeForUser(request()->user('api'), 'create', BarcodeRegistry::class);
        $item = BarcodeRegistry::create($request->only((new BarcodeRegistry)->getFillable()));

        return $this->sendResponse($item, 'BarcodeRegistry created successfully.');
    }

    public function show($id)
    {
        $this->authorizeForUser(request()->user('api'), 'view', BarcodeRegistry::class);
        $item = BarcodeRegistry::findOrFail($id);

        return $this->sendResponse($item, 'BarcodeRegistry retrieved successfully.');
    }

    public function update(Request $request, $id)
    {
        $this->authorizeForUser(request()->user('api'), 'update', BarcodeRegistry::class);
        $item = BarcodeRegistry::findOrFail($id);
        $item->update($request->only($item->getFillable()));

        return $this->sendResponse($item, 'BarcodeRegistry updated successfully.');
    }

    public function destroy($id)
    {
        $this->authorizeForUser(request()->user('api'), 'delete', BarcodeRegistry::class);
        $item = BarcodeRegistry::findOrFail($id);
        $item->delete();

        return $this->sendResponse([], 'BarcodeRegistry deleted successfully.');
    }
}
