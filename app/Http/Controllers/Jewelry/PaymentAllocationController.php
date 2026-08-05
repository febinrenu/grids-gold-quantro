<?php

namespace App\Http\Controllers\Jewelry;

use App\Http\Controllers\BaseController;
use App\Models\PaymentAllocation;
use Illuminate\Http\Request;

/**
 * Generic CRUD for `payment_allocations` (SRS domain, database/jewelrydatabase.sql).
 * Access is gated by a single per-resource Permission (app/Policies/Jewelry).
 */
class PaymentAllocationController extends BaseController
{
    public function index(Request $request)
    {
        $this->authorizeForUser(request()->user('api'), 'view', PaymentAllocation::class);
        $perPage = (int) $request->input('limit', 15);
        $query = PaymentAllocation::query();

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
        $this->authorizeForUser(request()->user('api'), 'create', PaymentAllocation::class);
        $item = PaymentAllocation::create($request->only((new PaymentAllocation)->getFillable()));

        return $this->sendResponse($item, 'PaymentAllocation created successfully.');
    }

    public function show($id)
    {
        $this->authorizeForUser(request()->user('api'), 'view', PaymentAllocation::class);
        $item = PaymentAllocation::findOrFail($id);

        return $this->sendResponse($item, 'PaymentAllocation retrieved successfully.');
    }

    public function update(Request $request, $id)
    {
        $this->authorizeForUser(request()->user('api'), 'update', PaymentAllocation::class);
        $item = PaymentAllocation::findOrFail($id);
        $item->update($request->only($item->getFillable()));

        return $this->sendResponse($item, 'PaymentAllocation updated successfully.');
    }

    public function destroy($id)
    {
        $this->authorizeForUser(request()->user('api'), 'delete', PaymentAllocation::class);
        $item = PaymentAllocation::findOrFail($id);
        $item->delete();

        return $this->sendResponse([], 'PaymentAllocation deleted successfully.');
    }
}
