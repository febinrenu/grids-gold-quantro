<?php

namespace App\Http\Controllers\Jewelry;

use App\Http\Controllers\BaseController;
use App\Models\WorkflowNotification;
use Illuminate\Http\Request;

/**
 * Generic CRUD for `workflow_notifications` (SRS domain, database/jewelrydatabase.sql).
 * Access is gated by a single per-resource Permission (app/Policies/Jewelry).
 */
class WorkflowNotificationController extends BaseController
{
    public function index(Request $request)
    {
        $this->authorizeForUser(request()->user('api'), 'view', WorkflowNotification::class);
        $perPage = (int) $request->input('limit', 15);
        $query = WorkflowNotification::query();

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
        $this->authorizeForUser(request()->user('api'), 'create', WorkflowNotification::class);
        $item = WorkflowNotification::create($request->only((new WorkflowNotification)->getFillable()));

        return $this->sendResponse($item, 'WorkflowNotification created successfully.');
    }

    public function show($id)
    {
        $this->authorizeForUser(request()->user('api'), 'view', WorkflowNotification::class);
        $item = WorkflowNotification::findOrFail($id);

        return $this->sendResponse($item, 'WorkflowNotification retrieved successfully.');
    }

    public function update(Request $request, $id)
    {
        $this->authorizeForUser(request()->user('api'), 'update', WorkflowNotification::class);
        $item = WorkflowNotification::findOrFail($id);
        $item->update($request->only($item->getFillable()));

        return $this->sendResponse($item, 'WorkflowNotification updated successfully.');
    }

    public function destroy($id)
    {
        $this->authorizeForUser(request()->user('api'), 'delete', WorkflowNotification::class);
        $item = WorkflowNotification::findOrFail($id);
        $item->delete();

        return $this->sendResponse([], 'WorkflowNotification deleted successfully.');
    }
}
