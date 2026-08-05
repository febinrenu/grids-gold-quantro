<?php

namespace App\Http\Controllers\Jewelry;

use App\Http\Controllers\BaseController;
use App\Models\RepairQc;
use Illuminate\Http\Request;

/**
 * Generic CRUD for `repair_qc` (SRS domain, database/jewelrydatabase.sql).
 * Access is gated by a single per-resource Permission (app/Policies/Jewelry).
 */
class RepairQcController extends BaseController
{
    public function index(Request $request)
    {
        $this->authorizeForUser(request()->user('api'), 'view', RepairQc::class);
        $perPage = (int) $request->input('limit', 15);
        $query = RepairQc::query();

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
        $this->authorizeForUser(request()->user('api'), 'create', RepairQc::class);
        $item = RepairQc::create($request->only((new RepairQc)->getFillable()));

        return $this->sendResponse($item, 'RepairQc created successfully.');
    }

    public function show($id)
    {
        $this->authorizeForUser(request()->user('api'), 'view', RepairQc::class);
        $item = RepairQc::findOrFail($id);

        return $this->sendResponse($item, 'RepairQc retrieved successfully.');
    }

    public function update(Request $request, $id)
    {
        $this->authorizeForUser(request()->user('api'), 'update', RepairQc::class);
        $item = RepairQc::findOrFail($id);
        $item->update($request->only($item->getFillable()));

        return $this->sendResponse($item, 'RepairQc updated successfully.');
    }

    public function destroy($id)
    {
        $this->authorizeForUser(request()->user('api'), 'delete', RepairQc::class);
        $item = RepairQc::findOrFail($id);
        $item->delete();

        return $this->sendResponse([], 'RepairQc deleted successfully.');
    }
}
