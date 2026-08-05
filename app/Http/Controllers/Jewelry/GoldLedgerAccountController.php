<?php

namespace App\Http\Controllers\Jewelry;

use App\Http\Controllers\BaseController;
use App\Models\GoldLedgerAccount;
use Illuminate\Http\Request;

/**
 * Generic CRUD for `gold_ledger_accounts` (SRS domain, database/jewelrydatabase.sql).
 * Access is gated by a single per-resource Permission (app/Policies/Jewelry).
 */
class GoldLedgerAccountController extends BaseController
{
    public function index(Request $request)
    {
        $this->authorizeForUser(request()->user('api'), 'view', GoldLedgerAccount::class);
        $perPage = (int) $request->input('limit', 15);
        $query = GoldLedgerAccount::query();

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
        $this->authorizeForUser(request()->user('api'), 'create', GoldLedgerAccount::class);
        $item = GoldLedgerAccount::create($request->only((new GoldLedgerAccount)->getFillable()));

        return $this->sendResponse($item, 'GoldLedgerAccount created successfully.');
    }

    public function show($id)
    {
        $this->authorizeForUser(request()->user('api'), 'view', GoldLedgerAccount::class);
        $item = GoldLedgerAccount::findOrFail($id);

        return $this->sendResponse($item, 'GoldLedgerAccount retrieved successfully.');
    }

    public function update(Request $request, $id)
    {
        $this->authorizeForUser(request()->user('api'), 'update', GoldLedgerAccount::class);
        $item = GoldLedgerAccount::findOrFail($id);
        $item->update($request->only($item->getFillable()));

        return $this->sendResponse($item, 'GoldLedgerAccount updated successfully.');
    }

    public function destroy($id)
    {
        $this->authorizeForUser(request()->user('api'), 'delete', GoldLedgerAccount::class);
        $item = GoldLedgerAccount::findOrFail($id);
        $item->delete();

        return $this->sendResponse([], 'GoldLedgerAccount deleted successfully.');
    }
}
