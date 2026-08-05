<?php

namespace App\Http\Controllers\Jewelry;

use App\Http\Controllers\BaseController;
use App\Models\BankAccount;
use Illuminate\Http\Request;

/**
 * Generic CRUD for `bank_accounts` (SRS domain, database/jewelrydatabase.sql).
 * Access is gated by a single per-resource Permission (app/Policies/Jewelry).
 */
class BankAccountController extends BaseController
{
    public function index(Request $request)
    {
        $this->authorizeForUser(request()->user('api'), 'view', BankAccount::class);
        $perPage = (int) $request->input('limit', 15);
        $query = BankAccount::query();

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
        $this->authorizeForUser(request()->user('api'), 'create', BankAccount::class);
        $item = BankAccount::create($request->only((new BankAccount)->getFillable()));

        return $this->sendResponse($item, 'BankAccount created successfully.');
    }

    public function show($id)
    {
        $this->authorizeForUser(request()->user('api'), 'view', BankAccount::class);
        $item = BankAccount::findOrFail($id);

        return $this->sendResponse($item, 'BankAccount retrieved successfully.');
    }

    public function update(Request $request, $id)
    {
        $this->authorizeForUser(request()->user('api'), 'update', BankAccount::class);
        $item = BankAccount::findOrFail($id);
        $item->update($request->only($item->getFillable()));

        return $this->sendResponse($item, 'BankAccount updated successfully.');
    }

    public function destroy($id)
    {
        $this->authorizeForUser(request()->user('api'), 'delete', BankAccount::class);
        $item = BankAccount::findOrFail($id);
        $item->delete();

        return $this->sendResponse([], 'BankAccount deleted successfully.');
    }
}
