<?php

namespace App\Http\Controllers\Jewelry;

use App\Http\Controllers\BaseController;
use App\Models\RepairOrder;
use Illuminate\Http\Request;

/**
 * Generic CRUD for `repair_orders` (SRS domain, database/jewelrydatabase.sql).
 * Access is gated by a single per-resource Permission (app/Policies/Jewelry).
 */
class RepairOrderController extends BaseController
{
    public function index(Request $request)
    {
        $this->authorizeForUser(request()->user('api'), 'view', RepairOrder::class);
        $perPage = (int) $request->input('limit', 15);
        $query = RepairOrder::query();

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
        $this->authorizeForUser(request()->user('api'), 'create', RepairOrder::class);
        $item = RepairOrder::create($request->only((new RepairOrder)->getFillable()));

        return $this->sendResponse($item, 'RepairOrder created successfully.');
    }

    public function show($id)
    {
        $this->authorizeForUser(request()->user('api'), 'view', RepairOrder::class);
        $item = RepairOrder::findOrFail($id);

        return $this->sendResponse($item, 'RepairOrder retrieved successfully.');
    }

    public function update(Request $request, $id)
    {
        $this->authorizeForUser(request()->user('api'), 'update', RepairOrder::class);
        $item = RepairOrder::findOrFail($id);
        $item->update($request->only($item->getFillable()));

        return $this->sendResponse($item, 'RepairOrder updated successfully.');
    }

    public function destroy($id)
    {
        $this->authorizeForUser(request()->user('api'), 'delete', RepairOrder::class);
        $item = RepairOrder::findOrFail($id);
        $item->delete();

        return $this->sendResponse([], 'RepairOrder deleted successfully.');
    }
}
