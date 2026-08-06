<?php

namespace App\Http\Controllers\Jewelry;

use App\Http\Controllers\BaseController;
use App\Models\CashAccount;
use Illuminate\Http\Request;

/**
 * Generic CRUD for `cash_accounts` (SRS domain, database/jewelrydatabase.sql).
 * Access is gated by a single per-resource Permission (app/Policies/Jewelry).
 */
class CashAccountController extends BaseController
{
    public function index(Request $request)
    {
        $this->authorizeForUser(request()->user('api'), 'view', CashAccount::class);
        $perPage = (int) $request->input('limit', 15);
        $query = CashAccount::query();

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
        $this->authorizeForUser(request()->user('api'), 'create', CashAccount::class);
        $item = CashAccount::create($request->only((new CashAccount)->getFillable()));

        return $this->sendResponse($item, 'CashAccount created successfully.');
    }

    public function show($id)
    {
        $this->authorizeForUser(request()->user('api'), 'view', CashAccount::class);
        $item = CashAccount::findOrFail($id);

        return $this->sendResponse($item, 'CashAccount retrieved successfully.');
    }

    public function update(Request $request, $id)
    {
        $this->authorizeForUser(request()->user('api'), 'update', CashAccount::class);
        $item = CashAccount::findOrFail($id);
        $item->update($request->only($item->getFillable()));

        return $this->sendResponse($item, 'CashAccount updated successfully.');
    }

    public function destroy($id)
    {
        $this->authorizeForUser(request()->user('api'), 'delete', CashAccount::class);
        $item = CashAccount::findOrFail($id);
        $item->delete();

        return $this->sendResponse([], 'CashAccount deleted successfully.');
    }
}
