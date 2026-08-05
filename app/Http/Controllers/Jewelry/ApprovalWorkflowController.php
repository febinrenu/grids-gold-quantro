<?php

namespace App\Http\Controllers\Jewelry;

use App\Http\Controllers\BaseController;
use App\Models\ApprovalWorkflow;
use Illuminate\Http\Request;

/**
 * Generic CRUD for `approval_workflows` (SRS domain, database/jewelrydatabase.sql).
 * Access is gated by a single per-resource Permission (app/Policies/Jewelry).
 */
class ApprovalWorkflowController extends BaseController
{
    public function index(Request $request)
    {
        $this->authorizeForUser(request()->user('api'), 'view', ApprovalWorkflow::class);
        $perPage = (int) $request->input('limit', 15);
        $query = ApprovalWorkflow::query();

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
        $this->authorizeForUser(request()->user('api'), 'create', ApprovalWorkflow::class);
        $item = ApprovalWorkflow::create($request->only((new ApprovalWorkflow)->getFillable()));

        return $this->sendResponse($item, 'ApprovalWorkflow created successfully.');
    }

    public function show($id)
    {
        $this->authorizeForUser(request()->user('api'), 'view', ApprovalWorkflow::class);
        $item = ApprovalWorkflow::findOrFail($id);

        return $this->sendResponse($item, 'ApprovalWorkflow retrieved successfully.');
    }

    public function update(Request $request, $id)
    {
        $this->authorizeForUser(request()->user('api'), 'update', ApprovalWorkflow::class);
        $item = ApprovalWorkflow::findOrFail($id);
        $item->update($request->only($item->getFillable()));

        return $this->sendResponse($item, 'ApprovalWorkflow updated successfully.');
    }

    public function destroy($id)
    {
        $this->authorizeForUser(request()->user('api'), 'delete', ApprovalWorkflow::class);
        $item = ApprovalWorkflow::findOrFail($id);
        $item->delete();

        return $this->sendResponse([], 'ApprovalWorkflow deleted successfully.');
    }
}
