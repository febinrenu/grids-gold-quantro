<?php

namespace App\Http\Controllers\Jewelry;

use App\Http\Controllers\BaseController;
use App\Models\LandedCostAllocation;
use Illuminate\Http\Request;

/**
 * Generic CRUD for `landed_cost_allocations` (SRS domain, database/jewelrydatabase.sql).
 * Access is gated by a single per-resource Permission (app/Policies/Jewelry).
 */
class LandedCostAllocationController extends BaseController
{
    public function index(Request $request)
    {
        $this->authorizeForUser(request()->user('api'), 'view', LandedCostAllocation::class);
        $perPage = (int) $request->input('limit', 15);
        $query = LandedCostAllocation::query();

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
        $this->authorizeForUser(request()->user('api'), 'create', LandedCostAllocation::class);
        $item = LandedCostAllocation::create($request->only((new LandedCostAllocation)->getFillable()));

        return $this->sendResponse($item, 'LandedCostAllocation created successfully.');
    }

    public function show($id)
    {
        $this->authorizeForUser(request()->user('api'), 'view', LandedCostAllocation::class);
        $item = LandedCostAllocation::findOrFail($id);

        return $this->sendResponse($item, 'LandedCostAllocation retrieved successfully.');
    }

    public function update(Request $request, $id)
    {
        $this->authorizeForUser(request()->user('api'), 'update', LandedCostAllocation::class);
        $item = LandedCostAllocation::findOrFail($id);
        $item->update($request->only($item->getFillable()));

        return $this->sendResponse($item, 'LandedCostAllocation updated successfully.');
    }

    public function destroy($id)
    {
        $this->authorizeForUser(request()->user('api'), 'delete', LandedCostAllocation::class);
        $item = LandedCostAllocation::findOrFail($id);
        $item->delete();

        return $this->sendResponse([], 'LandedCostAllocation deleted successfully.');
    }
}
