<?php

namespace App\Http\Controllers\Jewelry;

use App\Http\Controllers\BaseController;
use App\Models\ManufacturingOrder;
use Illuminate\Http\Request;

/**
 * Generic CRUD for `manufacturing_orders` (SRS domain, database/jewelrydatabase.sql).
 * Access is gated by a single per-resource Permission (app/Policies/Jewelry).
 */
class ManufacturingOrderController extends BaseController
{
    public function index(Request $request)
    {
        $this->authorizeForUser(request()->user('api'), 'view', ManufacturingOrder::class);
        $perPage = (int) $request->input('limit', 15);
        $query = ManufacturingOrder::query();

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
        $this->authorizeForUser(request()->user('api'), 'create', ManufacturingOrder::class);
        $item = ManufacturingOrder::create($request->only((new ManufacturingOrder)->getFillable()));

        return $this->sendResponse($item, 'ManufacturingOrder created successfully.');
    }

    public function show($id)
    {
        $this->authorizeForUser(request()->user('api'), 'view', ManufacturingOrder::class);
        $item = ManufacturingOrder::findOrFail($id);

        return $this->sendResponse($item, 'ManufacturingOrder retrieved successfully.');
    }

    public function update(Request $request, $id)
    {
        $this->authorizeForUser(request()->user('api'), 'update', ManufacturingOrder::class);
        $item = ManufacturingOrder::findOrFail($id);
        $item->update($request->only($item->getFillable()));

        return $this->sendResponse($item, 'ManufacturingOrder updated successfully.');
    }

    public function destroy($id)
    {
        $this->authorizeForUser(request()->user('api'), 'delete', ManufacturingOrder::class);
        $item = ManufacturingOrder::findOrFail($id);
        $item->delete();

        return $this->sendResponse([], 'ManufacturingOrder deleted successfully.');
    }
}
