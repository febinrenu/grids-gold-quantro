<?php

namespace App\Http\Controllers\Jewelry;

use App\Http\Controllers\BaseController;
use App\Models\ActivityLog;
use Illuminate\Http\Request;

/**
 * Generic CRUD for `activity_logs` (SRS domain, database/jewelrydatabase.sql).
 * Access is gated by a single per-resource Permission (app/Policies/Jewelry).
 */
class ActivityLogController extends BaseController
{
    public function index(Request $request)
    {
        $this->authorizeForUser(request()->user('api'), 'view', ActivityLog::class);
        $perPage = (int) $request->input('limit', 15);
        $query = ActivityLog::query();

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
        $this->authorizeForUser(request()->user('api'), 'create', ActivityLog::class);
        $item = ActivityLog::create($request->only((new ActivityLog)->getFillable()));

        return $this->sendResponse($item, 'ActivityLog created successfully.');
    }

    public function show($id)
    {
        $this->authorizeForUser(request()->user('api'), 'view', ActivityLog::class);
        $item = ActivityLog::findOrFail($id);

        return $this->sendResponse($item, 'ActivityLog retrieved successfully.');
    }

    public function update(Request $request, $id)
    {
        $this->authorizeForUser(request()->user('api'), 'update', ActivityLog::class);
        $item = ActivityLog::findOrFail($id);
        $item->update($request->only($item->getFillable()));

        return $this->sendResponse($item, 'ActivityLog updated successfully.');
    }

    public function destroy($id)
    {
        $this->authorizeForUser(request()->user('api'), 'delete', ActivityLog::class);
        $item = ActivityLog::findOrFail($id);
        $item->delete();

        return $this->sendResponse([], 'ActivityLog deleted successfully.');
    }
}
