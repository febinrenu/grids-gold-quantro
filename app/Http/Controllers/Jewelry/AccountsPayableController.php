<?php

namespace App\Http\Controllers\Jewelry;

use App\Http\Controllers\BaseController;
use App\Models\AccountsPayable;
use Illuminate\Http\Request;

/**
 * Generic CRUD for `accounts_payable` (SRS domain, database/jewelrydatabase.sql).
 * Access is gated by a single per-resource Permission (app/Policies/Jewelry).
 */
class AccountsPayableController extends BaseController
{
    public function index(Request $request)
    {
        $this->authorizeForUser(request()->user('api'), 'view', AccountsPayable::class);
        $perPage = (int) $request->input('limit', 15);
        $query = AccountsPayable::query();

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
        $this->authorizeForUser(request()->user('api'), 'create', AccountsPayable::class);
        $item = AccountsPayable::create($request->only((new AccountsPayable)->getFillable()));

        return $this->sendResponse($item, 'AccountsPayable created successfully.');
    }

    public function show($id)
    {
        $this->authorizeForUser(request()->user('api'), 'view', AccountsPayable::class);
        $item = AccountsPayable::findOrFail($id);

        return $this->sendResponse($item, 'AccountsPayable retrieved successfully.');
    }

    public function update(Request $request, $id)
    {
        $this->authorizeForUser(request()->user('api'), 'update', AccountsPayable::class);
        $item = AccountsPayable::findOrFail($id);
        $item->update($request->only($item->getFillable()));

        return $this->sendResponse($item, 'AccountsPayable updated successfully.');
    }

    public function destroy($id)
    {
        $this->authorizeForUser(request()->user('api'), 'delete', AccountsPayable::class);
        $item = AccountsPayable::findOrFail($id);
        $item->delete();

        return $this->sendResponse([], 'AccountsPayable deleted successfully.');
    }
}
