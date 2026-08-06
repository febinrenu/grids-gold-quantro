<?php

namespace App\Http\Controllers\Jewelry;

use App\Http\Controllers\BaseController;
use App\Models\PurchaseApproval;
use Illuminate\Http\Request;

/**
 * Generic CRUD for `purchase_approvals` (SRS domain, database/jewelrydatabase.sql).
 * Access is gated by a single per-resource Permission (app/Policies/Jewelry).
 */
class PurchaseApprovalController extends BaseController
{
    public function index(Request $request)
    {
        $this->authorizeForUser(request()->user('api'), 'view', PurchaseApproval::class);
        $perPage = (int) $request->input('limit', 15);
        $query = PurchaseApproval::query();

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
        $this->authorizeForUser(request()->user('api'), 'create', PurchaseApproval::class);
        $item = PurchaseApproval::create($request->only((new PurchaseApproval)->getFillable()));

        return $this->sendResponse($item, 'PurchaseApproval created successfully.');
    }

    public function show($id)
    {
        $this->authorizeForUser(request()->user('api'), 'view', PurchaseApproval::class);
        $item = PurchaseApproval::findOrFail($id);

        return $this->sendResponse($item, 'PurchaseApproval retrieved successfully.');
    }

    public function update(Request $request, $id)
    {
        $this->authorizeForUser(request()->user('api'), 'update', PurchaseApproval::class);
        $item = PurchaseApproval::findOrFail($id);
        $item->update($request->only($item->getFillable()));

        return $this->sendResponse($item, 'PurchaseApproval updated successfully.');
    }

    public function destroy($id)
    {
        $this->authorizeForUser(request()->user('api'), 'delete', PurchaseApproval::class);
        $item = PurchaseApproval::findOrFail($id);
        $item->delete();

        return $this->sendResponse([], 'PurchaseApproval deleted successfully.');
    }
}
