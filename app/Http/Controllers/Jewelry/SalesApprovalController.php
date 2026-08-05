<?php

namespace App\Http\Controllers\Jewelry;

use App\Http\Controllers\BaseController;
use App\Models\SalesApproval;
use Illuminate\Http\Request;

/**
 * Generic CRUD for `sales_approvals` (SRS domain, database/jewelrydatabase.sql).
 * Access is gated by a single per-resource Permission (app/Policies/Jewelry).
 */
class SalesApprovalController extends BaseController
{
    public function index(Request $request)
    {
        $this->authorizeForUser(request()->user('api'), 'view', SalesApproval::class);
        $perPage = (int) $request->input('limit', 15);
        $query = SalesApproval::query();

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
        $this->authorizeForUser(request()->user('api'), 'create', SalesApproval::class);
        $item = SalesApproval::create($request->only((new SalesApproval)->getFillable()));

        return $this->sendResponse($item, 'SalesApproval created successfully.');
    }

    public function show($id)
    {
        $this->authorizeForUser(request()->user('api'), 'view', SalesApproval::class);
        $item = SalesApproval::findOrFail($id);

        return $this->sendResponse($item, 'SalesApproval retrieved successfully.');
    }

    public function update(Request $request, $id)
    {
        $this->authorizeForUser(request()->user('api'), 'update', SalesApproval::class);
        $item = SalesApproval::findOrFail($id);
        $item->update($request->only($item->getFillable()));

        return $this->sendResponse($item, 'SalesApproval updated successfully.');
    }

    public function destroy($id)
    {
        $this->authorizeForUser(request()->user('api'), 'delete', SalesApproval::class);
        $item = SalesApproval::findOrFail($id);
        $item->delete();

        return $this->sendResponse([], 'SalesApproval deleted successfully.');
    }
}
