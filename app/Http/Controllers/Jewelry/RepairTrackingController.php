<?php

namespace App\Http\Controllers\Jewelry;

use App\Http\Controllers\BaseController;
use App\Models\RepairTracking;
use Illuminate\Http\Request;

/**
 * Generic CRUD for `repair_tracking` (SRS domain, database/jewelrydatabase.sql).
 * Access is gated by a single per-resource Permission (app/Policies/Jewelry).
 */
class RepairTrackingController extends BaseController
{
    public function index(Request $request)
    {
        $this->authorizeForUser(request()->user('api'), 'view', RepairTracking::class);
        $perPage = (int) $request->input('limit', 15);
        $query = RepairTracking::query();

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
        $this->authorizeForUser(request()->user('api'), 'create', RepairTracking::class);
        $item = RepairTracking::create($request->only((new RepairTracking)->getFillable()));

        return $this->sendResponse($item, 'RepairTracking created successfully.');
    }

    public function show($id)
    {
        $this->authorizeForUser(request()->user('api'), 'view', RepairTracking::class);
        $item = RepairTracking::findOrFail($id);

        return $this->sendResponse($item, 'RepairTracking retrieved successfully.');
    }

    public function update(Request $request, $id)
    {
        $this->authorizeForUser(request()->user('api'), 'update', RepairTracking::class);
        $item = RepairTracking::findOrFail($id);
        $item->update($request->only($item->getFillable()));

        return $this->sendResponse($item, 'RepairTracking updated successfully.');
    }

    public function destroy($id)
    {
        $this->authorizeForUser(request()->user('api'), 'delete', RepairTracking::class);
        $item = RepairTracking::findOrFail($id);
        $item->delete();

        return $this->sendResponse([], 'RepairTracking deleted successfully.');
    }
}
