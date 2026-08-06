<?php

namespace App\Http\Controllers\Jewelry;

use App\Http\Controllers\BaseController;
use App\Models\BankTransaction;
use Illuminate\Http\Request;

/**
 * Generic CRUD for `bank_transactions` (SRS domain, database/jewelrydatabase.sql).
 * Access is gated by a single per-resource Permission (app/Policies/Jewelry).
 */
class BankTransactionController extends BaseController
{
    public function index(Request $request)
    {
        $this->authorizeForUser(request()->user('api'), 'view', BankTransaction::class);
        $perPage = (int) $request->input('limit', 15);
        $query = BankTransaction::query();

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
        $this->authorizeForUser(request()->user('api'), 'create', BankTransaction::class);
        $item = BankTransaction::create($request->only((new BankTransaction)->getFillable()));

        return $this->sendResponse($item, 'BankTransaction created successfully.');
    }

    public function show($id)
    {
        $this->authorizeForUser(request()->user('api'), 'view', BankTransaction::class);
        $item = BankTransaction::findOrFail($id);

        return $this->sendResponse($item, 'BankTransaction retrieved successfully.');
    }

    public function update(Request $request, $id)
    {
        $this->authorizeForUser(request()->user('api'), 'update', BankTransaction::class);
        $item = BankTransaction::findOrFail($id);
        $item->update($request->only($item->getFillable()));

        return $this->sendResponse($item, 'BankTransaction updated successfully.');
    }

    public function destroy($id)
    {
        $this->authorizeForUser(request()->user('api'), 'delete', BankTransaction::class);
        $item = BankTransaction::findOrFail($id);
        $item->delete();

        return $this->sendResponse([], 'BankTransaction deleted successfully.');
    }
}
