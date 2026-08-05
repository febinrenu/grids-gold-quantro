<?php

namespace App\Http\Controllers\Jewelry;

use App\Http\Controllers\BaseController;
use App\Models\RepairPayment;
use Illuminate\Http\Request;

/**
 * Generic CRUD for `repair_payments` (SRS domain, database/jewelrydatabase.sql).
 * Access is gated by a single per-resource Permission (app/Policies/Jewelry).
 */
class RepairPaymentController extends BaseController
{
    public function index(Request $request)
    {
        $this->authorizeForUser(request()->user('api'), 'view', RepairPayment::class);
        $perPage = (int) $request->input('limit', 15);
        $query = RepairPayment::query();

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
        $this->authorizeForUser(request()->user('api'), 'create', RepairPayment::class);
        $item = RepairPayment::create($request->only((new RepairPayment)->getFillable()));

        return $this->sendResponse($item, 'RepairPayment created successfully.');
    }

    public function show($id)
    {
        $this->authorizeForUser(request()->user('api'), 'view', RepairPayment::class);
        $item = RepairPayment::findOrFail($id);

        return $this->sendResponse($item, 'RepairPayment retrieved successfully.');
    }

    public function update(Request $request, $id)
    {
        $this->authorizeForUser(request()->user('api'), 'update', RepairPayment::class);
        $item = RepairPayment::findOrFail($id);
        $item->update($request->only($item->getFillable()));

        return $this->sendResponse($item, 'RepairPayment updated successfully.');
    }

    public function destroy($id)
    {
        $this->authorizeForUser(request()->user('api'), 'delete', RepairPayment::class);
        $item = RepairPayment::findOrFail($id);
        $item->delete();

        return $this->sendResponse([], 'RepairPayment deleted successfully.');
    }
}
