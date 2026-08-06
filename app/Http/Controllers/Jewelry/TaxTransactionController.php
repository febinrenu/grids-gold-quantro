<?php

namespace App\Http\Controllers\Jewelry;

use App\Http\Controllers\BaseController;
use App\Models\TaxTransaction;
use Illuminate\Http\Request;

/**
 * Generic CRUD for `tax_transactions` (SRS domain, database/jewelrydatabase.sql).
 * Access is gated by a single per-resource Permission (app/Policies/Jewelry).
 */
class TaxTransactionController extends BaseController
{
    public function index(Request $request)
    {
        $this->authorizeForUser(request()->user('api'), 'view', TaxTransaction::class);
        $perPage = (int) $request->input('limit', 15);
        $query = TaxTransaction::query();

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
        $this->authorizeForUser(request()->user('api'), 'create', TaxTransaction::class);
        $item = TaxTransaction::create($request->only((new TaxTransaction)->getFillable()));

        return $this->sendResponse($item, 'TaxTransaction created successfully.');
    }

    public function show($id)
    {
        $this->authorizeForUser(request()->user('api'), 'view', TaxTransaction::class);
        $item = TaxTransaction::findOrFail($id);

        return $this->sendResponse($item, 'TaxTransaction retrieved successfully.');
    }

    public function update(Request $request, $id)
    {
        $this->authorizeForUser(request()->user('api'), 'update', TaxTransaction::class);
        $item = TaxTransaction::findOrFail($id);
        $item->update($request->only($item->getFillable()));

        return $this->sendResponse($item, 'TaxTransaction updated successfully.');
    }

    public function destroy($id)
    {
        $this->authorizeForUser(request()->user('api'), 'delete', TaxTransaction::class);
        $item = TaxTransaction::findOrFail($id);
        $item->delete();

        return $this->sendResponse([], 'TaxTransaction deleted successfully.');
    }
}
