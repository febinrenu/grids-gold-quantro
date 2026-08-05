<?php

namespace App\Http\Controllers\Jewelry;

use App\Http\Controllers\BaseController;
use App\Models\SystemHealth;
use Illuminate\Http\Request;

/**
 * Generic CRUD for `system_health` (SRS domain, database/jewelrydatabase.sql).
 * Access is gated by a single per-resource Permission (app/Policies/Jewelry).
 */
class SystemHealthController extends BaseController
{
    public function index(Request $request)
    {
        $this->authorizeForUser(request()->user('api'), 'view', SystemHealth::class);
        $perPage = (int) $request->input('limit', 15);
        $query = SystemHealth::query();

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
        $this->authorizeForUser(request()->user('api'), 'create', SystemHealth::class);
        $item = SystemHealth::create($request->only((new SystemHealth)->getFillable()));

        return $this->sendResponse($item, 'SystemHealth created successfully.');
    }

    public function show($id)
    {
        $this->authorizeForUser(request()->user('api'), 'view', SystemHealth::class);
        $item = SystemHealth::findOrFail($id);

        return $this->sendResponse($item, 'SystemHealth retrieved successfully.');
    }

    public function update(Request $request, $id)
    {
        $this->authorizeForUser(request()->user('api'), 'update', SystemHealth::class);
        $item = SystemHealth::findOrFail($id);
        $item->update($request->only($item->getFillable()));

        return $this->sendResponse($item, 'SystemHealth updated successfully.');
    }

    public function destroy($id)
    {
        $this->authorizeForUser(request()->user('api'), 'delete', SystemHealth::class);
        $item = SystemHealth::findOrFail($id);
        $item->delete();

        return $this->sendResponse([], 'SystemHealth deleted successfully.');
    }
}
