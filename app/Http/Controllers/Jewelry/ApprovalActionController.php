<?php

namespace App\Http\Controllers\Jewelry;

use App\Http\Controllers\BaseController;
use App\Models\ApprovalAction;
use Illuminate\Http\Request;

/**
 * Generic CRUD for `approval_actions` (SRS domain, database/jewelrydatabase.sql).
 * Access is gated by a single per-resource Permission (app/Policies/Jewelry).
 */
class ApprovalActionController extends BaseController
{
    public function index(Request $request)
    {
        $this->authorizeForUser(request()->user('api'), 'view', ApprovalAction::class);
        $perPage = (int) $request->input('limit', 15);
        $query = ApprovalAction::query();

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
        $this->authorizeForUser(request()->user('api'), 'create', ApprovalAction::class);
        $item = ApprovalAction::create($request->only((new ApprovalAction)->getFillable()));

        return $this->sendResponse($item, 'ApprovalAction created successfully.');
    }

    public function show($id)
    {
        $this->authorizeForUser(request()->user('api'), 'view', ApprovalAction::class);
        $item = ApprovalAction::findOrFail($id);

        return $this->sendResponse($item, 'ApprovalAction retrieved successfully.');
    }

    public function update(Request $request, $id)
    {
        $this->authorizeForUser(request()->user('api'), 'update', ApprovalAction::class);
        $item = ApprovalAction::findOrFail($id);
        $item->update($request->only($item->getFillable()));

        return $this->sendResponse($item, 'ApprovalAction updated successfully.');
    }

    public function destroy($id)
    {
        $this->authorizeForUser(request()->user('api'), 'delete', ApprovalAction::class);
        $item = ApprovalAction::findOrFail($id);
        $item->delete();

        return $this->sendResponse([], 'ApprovalAction deleted successfully.');
    }
}
