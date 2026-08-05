<?php

namespace App\Http\Controllers\Jewelry;

use App\Http\Controllers\BaseController;
use App\Models\PurchaseRequest;
use Illuminate\Http\Request;

/**
 * Generic CRUD for `purchase_requests` (SRS domain, database/jewelrydatabase.sql).
 * Access is gated by a single per-resource Permission (app/Policies/Jewelry).
 */
class PurchaseRequestController extends BaseController
{
    public function index(Request $request)
    {
        $this->authorizeForUser(request()->user('api'), 'view', PurchaseRequest::class);
        $perPage = (int) $request->input('limit', 15);
        $query = PurchaseRequest::query();

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
        $this->authorizeForUser(request()->user('api'), 'create', PurchaseRequest::class);
        $item = PurchaseRequest::create($request->only((new PurchaseRequest)->getFillable()));

        return $this->sendResponse($item, 'PurchaseRequest created successfully.');
    }

    public function show($id)
    {
        $this->authorizeForUser(request()->user('api'), 'view', PurchaseRequest::class);
        $item = PurchaseRequest::findOrFail($id);

        return $this->sendResponse($item, 'PurchaseRequest retrieved successfully.');
    }

    public function update(Request $request, $id)
    {
        $this->authorizeForUser(request()->user('api'), 'update', PurchaseRequest::class);
        $item = PurchaseRequest::findOrFail($id);
        $item->update($request->only($item->getFillable()));

        return $this->sendResponse($item, 'PurchaseRequest updated successfully.');
    }

    public function destroy($id)
    {
        $this->authorizeForUser(request()->user('api'), 'delete', PurchaseRequest::class);
        $item = PurchaseRequest::findOrFail($id);
        $item->delete();

        return $this->sendResponse([], 'PurchaseRequest deleted successfully.');
    }
}
