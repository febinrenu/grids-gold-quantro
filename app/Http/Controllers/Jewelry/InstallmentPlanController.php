<?php

namespace App\Http\Controllers\Jewelry;

use App\Http\Controllers\BaseController;
use App\Models\InstallmentPlan;
use Illuminate\Http\Request;

/**
 * Generic CRUD for `installment_plans` (SRS domain, database/jewelrydatabase.sql).
 * Access is gated by a single per-resource Permission (app/Policies/Jewelry).
 */
class InstallmentPlanController extends BaseController
{
    public function index(Request $request)
    {
        $this->authorizeForUser(request()->user('api'), 'view', InstallmentPlan::class);
        $perPage = (int) $request->input('limit', 15);
        $query = InstallmentPlan::query();

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
        $this->authorizeForUser(request()->user('api'), 'create', InstallmentPlan::class);
        $item = InstallmentPlan::create($request->only((new InstallmentPlan)->getFillable()));

        return $this->sendResponse($item, 'InstallmentPlan created successfully.');
    }

    public function show($id)
    {
        $this->authorizeForUser(request()->user('api'), 'view', InstallmentPlan::class);
        $item = InstallmentPlan::findOrFail($id);

        return $this->sendResponse($item, 'InstallmentPlan retrieved successfully.');
    }

    public function update(Request $request, $id)
    {
        $this->authorizeForUser(request()->user('api'), 'update', InstallmentPlan::class);
        $item = InstallmentPlan::findOrFail($id);
        $item->update($request->only($item->getFillable()));

        return $this->sendResponse($item, 'InstallmentPlan updated successfully.');
    }

    public function destroy($id)
    {
        $this->authorizeForUser(request()->user('api'), 'delete', InstallmentPlan::class);
        $item = InstallmentPlan::findOrFail($id);
        $item->delete();

        return $this->sendResponse([], 'InstallmentPlan deleted successfully.');
    }
}
