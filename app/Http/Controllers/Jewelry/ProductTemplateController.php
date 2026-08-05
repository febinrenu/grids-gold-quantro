<?php

namespace App\Http\Controllers\Jewelry;

use App\Http\Controllers\BaseController;
use App\Models\ProductTemplate;
use Illuminate\Http\Request;

/**
 * Generic CRUD for `product_templates` (SRS domain, database/jewelrydatabase.sql).
 * Access is gated by a single per-resource Permission (app/Policies/Jewelry).
 */
class ProductTemplateController extends BaseController
{
    public function index(Request $request)
    {
        $this->authorizeForUser(request()->user('api'), 'view', ProductTemplate::class);
        $perPage = (int) $request->input('limit', 15);
        $query = ProductTemplate::query();

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
        $this->authorizeForUser(request()->user('api'), 'create', ProductTemplate::class);
        $item = ProductTemplate::create($request->only((new ProductTemplate)->getFillable()));

        return $this->sendResponse($item, 'ProductTemplate created successfully.');
    }

    public function show($id)
    {
        $this->authorizeForUser(request()->user('api'), 'view', ProductTemplate::class);
        $item = ProductTemplate::findOrFail($id);

        return $this->sendResponse($item, 'ProductTemplate retrieved successfully.');
    }

    public function update(Request $request, $id)
    {
        $this->authorizeForUser(request()->user('api'), 'update', ProductTemplate::class);
        $item = ProductTemplate::findOrFail($id);
        $item->update($request->only($item->getFillable()));

        return $this->sendResponse($item, 'ProductTemplate updated successfully.');
    }

    public function destroy($id)
    {
        $this->authorizeForUser(request()->user('api'), 'delete', ProductTemplate::class);
        $item = ProductTemplate::findOrFail($id);
        $item->delete();

        return $this->sendResponse([], 'ProductTemplate deleted successfully.');
    }
}
