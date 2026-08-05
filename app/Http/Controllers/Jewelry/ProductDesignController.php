<?php

namespace App\Http\Controllers\Jewelry;

use App\Http\Controllers\BaseController;
use App\Models\ProductDesign;
use Illuminate\Http\Request;

/**
 * Generic CRUD for `product_designs` (SRS domain, database/jewelrydatabase.sql).
 * Access is gated by a single per-resource Permission (app/Policies/Jewelry).
 */
class ProductDesignController extends BaseController
{
    public function index(Request $request)
    {
        $this->authorizeForUser(request()->user('api'), 'view', ProductDesign::class);
        $perPage = (int) $request->input('limit', 15);
        $query = ProductDesign::query();

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
        $this->authorizeForUser(request()->user('api'), 'create', ProductDesign::class);
        $item = ProductDesign::create($request->only((new ProductDesign)->getFillable()));

        return $this->sendResponse($item, 'ProductDesign created successfully.');
    }

    public function show($id)
    {
        $this->authorizeForUser(request()->user('api'), 'view', ProductDesign::class);
        $item = ProductDesign::findOrFail($id);

        return $this->sendResponse($item, 'ProductDesign retrieved successfully.');
    }

    public function update(Request $request, $id)
    {
        $this->authorizeForUser(request()->user('api'), 'update', ProductDesign::class);
        $item = ProductDesign::findOrFail($id);
        $item->update($request->only($item->getFillable()));

        return $this->sendResponse($item, 'ProductDesign updated successfully.');
    }

    public function destroy($id)
    {
        $this->authorizeForUser(request()->user('api'), 'delete', ProductDesign::class);
        $item = ProductDesign::findOrFail($id);
        $item->delete();

        return $this->sendResponse([], 'ProductDesign deleted successfully.');
    }
}
