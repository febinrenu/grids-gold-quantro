<?php

namespace App\Http\Controllers\Jewelry;

use App\Http\Controllers\BaseController;
use App\Models\FinancialPeriod;
use Illuminate\Http\Request;

/**
 * Generic CRUD for `financial_periods` (SRS domain, database/jewelrydatabase.sql).
 * Access is gated by a single per-resource Permission (app/Policies/Jewelry).
 */
class FinancialPeriodController extends BaseController
{
    public function index(Request $request)
    {
        $this->authorizeForUser(request()->user('api'), 'view', FinancialPeriod::class);
        $perPage = (int) $request->input('limit', 15);
        $query = FinancialPeriod::query();

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
        $this->authorizeForUser(request()->user('api'), 'create', FinancialPeriod::class);
        $item = FinancialPeriod::create($request->only((new FinancialPeriod)->getFillable()));

        return $this->sendResponse($item, 'FinancialPeriod created successfully.');
    }

    public function show($id)
    {
        $this->authorizeForUser(request()->user('api'), 'view', FinancialPeriod::class);
        $item = FinancialPeriod::findOrFail($id);

        return $this->sendResponse($item, 'FinancialPeriod retrieved successfully.');
    }

    public function update(Request $request, $id)
    {
        $this->authorizeForUser(request()->user('api'), 'update', FinancialPeriod::class);
        $item = FinancialPeriod::findOrFail($id);
        $item->update($request->only($item->getFillable()));

        return $this->sendResponse($item, 'FinancialPeriod updated successfully.');
    }

    public function destroy($id)
    {
        $this->authorizeForUser(request()->user('api'), 'delete', FinancialPeriod::class);
        $item = FinancialPeriod::findOrFail($id);
        $item->delete();

        return $this->sendResponse([], 'FinancialPeriod deleted successfully.');
    }
}
