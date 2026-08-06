<?php

namespace App\Http\Controllers\Jewelry;

use App\Http\Controllers\BaseController;
use App\Models\RepairPart;
use Illuminate\Http\Request;

/**
 * Generic CRUD for `repair_parts` (SRS domain, database/jewelrydatabase.sql).
 * Access is gated by a single per-resource Permission (app/Policies/Jewelry).
 */
class RepairPartController extends BaseController
{
    public function index(Request $request)
    {
        $this->authorizeForUser(request()->user('api'), 'view', RepairPart::class);
        $perPage = (int) $request->input('limit', 15);
        $query = RepairPart::query();

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
        $this->authorizeForUser(request()->user('api'), 'create', RepairPart::class);
        $item = RepairPart::create($request->only((new RepairPart)->getFillable()));

        return $this->sendResponse($item, 'RepairPart created successfully.');
    }

    public function show($id)
    {
        $this->authorizeForUser(request()->user('api'), 'view', RepairPart::class);
        $item = RepairPart::findOrFail($id);

        return $this->sendResponse($item, 'RepairPart retrieved successfully.');
    }

    public function update(Request $request, $id)
    {
        $this->authorizeForUser(request()->user('api'), 'update', RepairPart::class);
        $item = RepairPart::findOrFail($id);
        $item->update($request->only($item->getFillable()));

        return $this->sendResponse($item, 'RepairPart updated successfully.');
    }

    public function destroy($id)
    {
        $this->authorizeForUser(request()->user('api'), 'delete', RepairPart::class);
        $item = RepairPart::findOrFail($id);
        $item->delete();

        return $this->sendResponse([], 'RepairPart deleted successfully.');
    }
}
