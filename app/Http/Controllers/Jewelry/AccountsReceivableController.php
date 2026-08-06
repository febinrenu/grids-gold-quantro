<?php

namespace App\Http\Controllers\Jewelry;

use App\Http\Controllers\BaseController;
use App\Models\AccountsReceivable;
use Illuminate\Http\Request;

/**
 * Generic CRUD for `accounts_receivable` (SRS domain, database/jewelrydatabase.sql).
 * Access is gated by a single per-resource Permission (app/Policies/Jewelry).
 */
class AccountsReceivableController extends BaseController
{
    public function index(Request $request)
    {
        $this->authorizeForUser(request()->user('api'), 'view', AccountsReceivable::class);
        $perPage = (int) $request->input('limit', 15);
        $query = AccountsReceivable::query();

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
        $this->authorizeForUser(request()->user('api'), 'create', AccountsReceivable::class);
        $item = AccountsReceivable::create($request->only((new AccountsReceivable)->getFillable()));

        return $this->sendResponse($item, 'AccountsReceivable created successfully.');
    }

    public function show($id)
    {
        $this->authorizeForUser(request()->user('api'), 'view', AccountsReceivable::class);
        $item = AccountsReceivable::findOrFail($id);

        return $this->sendResponse($item, 'AccountsReceivable retrieved successfully.');
    }

    public function update(Request $request, $id)
    {
        $this->authorizeForUser(request()->user('api'), 'update', AccountsReceivable::class);
        $item = AccountsReceivable::findOrFail($id);
        $item->update($request->only($item->getFillable()));

        return $this->sendResponse($item, 'AccountsReceivable updated successfully.');
    }

    public function destroy($id)
    {
        $this->authorizeForUser(request()->user('api'), 'delete', AccountsReceivable::class);
        $item = AccountsReceivable::findOrFail($id);
        $item->delete();

        return $this->sendResponse([], 'AccountsReceivable deleted successfully.');
    }
}
