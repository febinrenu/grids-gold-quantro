<?php

namespace App\Http\Controllers\Jewelry;

use App\Http\Controllers\BaseController;
use App\Models\FinancialClosing;
use Illuminate\Http\Request;

/**
 * Generic CRUD for `financial_closings` (SRS domain, database/jewelrydatabase.sql).
 * Access is gated by a single per-resource Permission (app/Policies/Jewelry).
 */
class FinancialClosingController extends BaseController
{
    public function index(Request $request)
    {
        $this->authorizeForUser(request()->user('api'), 'view', FinancialClosing::class);
        $perPage = (int) $request->input('limit', 15);
        $query = FinancialClosing::query();

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
        $this->authorizeForUser(request()->user('api'), 'create', FinancialClosing::class);
        $item = FinancialClosing::create($request->only((new FinancialClosing)->getFillable()));

        return $this->sendResponse($item, 'FinancialClosing created successfully.');
    }

    public function show($id)
    {
        $this->authorizeForUser(request()->user('api'), 'view', FinancialClosing::class);
        $item = FinancialClosing::findOrFail($id);

        return $this->sendResponse($item, 'FinancialClosing retrieved successfully.');
    }

    public function update(Request $request, $id)
    {
        $this->authorizeForUser(request()->user('api'), 'update', FinancialClosing::class);
        $item = FinancialClosing::findOrFail($id);
        $item->update($request->only($item->getFillable()));

        return $this->sendResponse($item, 'FinancialClosing updated successfully.');
    }

    public function destroy($id)
    {
        $this->authorizeForUser(request()->user('api'), 'delete', FinancialClosing::class);
        $item = FinancialClosing::findOrFail($id);
        $item->delete();

        return $this->sendResponse([], 'FinancialClosing deleted successfully.');
    }
}
