<?php

namespace App\Http\Controllers\Jewelry;

use App\Http\Controllers\BaseController;
use App\Models\ApprovalRequest;
use Illuminate\Http\Request;

/**
 * Generic CRUD for `approval_requests` (SRS domain, database/jewelrydatabase.sql).
 * Access is gated by a single per-resource Permission (app/Policies/Jewelry).
 */
class ApprovalRequestController extends BaseController
{
    public function index(Request $request)
    {
        $this->authorizeForUser(request()->user('api'), 'view', ApprovalRequest::class);
        $perPage = (int) $request->input('limit', 15);
        $query = ApprovalRequest::query();

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
        $this->authorizeForUser(request()->user('api'), 'create', ApprovalRequest::class);
        $item = ApprovalRequest::create($request->only((new ApprovalRequest)->getFillable()));

        return $this->sendResponse($item, 'ApprovalRequest created successfully.');
    }

    public function show($id)
    {
        $this->authorizeForUser(request()->user('api'), 'view', ApprovalRequest::class);
        $item = ApprovalRequest::findOrFail($id);

        return $this->sendResponse($item, 'ApprovalRequest retrieved successfully.');
    }

    public function update(Request $request, $id)
    {
        $this->authorizeForUser(request()->user('api'), 'update', ApprovalRequest::class);
        $item = ApprovalRequest::findOrFail($id);
        $item->update($request->only($item->getFillable()));

        return $this->sendResponse($item, 'ApprovalRequest updated successfully.');
    }

    public function destroy($id)
    {
        $this->authorizeForUser(request()->user('api'), 'delete', ApprovalRequest::class);
        $item = ApprovalRequest::findOrFail($id);
        $item->delete();

        return $this->sendResponse([], 'ApprovalRequest deleted successfully.');
    }
}
