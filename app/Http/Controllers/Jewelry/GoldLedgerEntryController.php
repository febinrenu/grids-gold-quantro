<?php

namespace App\Http\Controllers\Jewelry;

use App\Http\Controllers\BaseController;
use App\Models\GoldLedgerEntry;
use Illuminate\Http\Request;

/**
 * Generic CRUD for `gold_ledger_entries` (SRS domain, database/jewelrydatabase.sql).
 * Access is gated by a single per-resource Permission (app/Policies/Jewelry).
 */
class GoldLedgerEntryController extends BaseController
{
    public function index(Request $request)
    {
        $this->authorizeForUser(request()->user('api'), 'view', GoldLedgerEntry::class);
        $perPage = (int) $request->input('limit', 15);
        $query = GoldLedgerEntry::query();

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
        $this->authorizeForUser(request()->user('api'), 'create', GoldLedgerEntry::class);
        $item = GoldLedgerEntry::create($request->only((new GoldLedgerEntry)->getFillable()));

        return $this->sendResponse($item, 'GoldLedgerEntry created successfully.');
    }

    public function show($id)
    {
        $this->authorizeForUser(request()->user('api'), 'view', GoldLedgerEntry::class);
        $item = GoldLedgerEntry::findOrFail($id);

        return $this->sendResponse($item, 'GoldLedgerEntry retrieved successfully.');
    }

    public function update(Request $request, $id)
    {
        $this->authorizeForUser(request()->user('api'), 'update', GoldLedgerEntry::class);
        $item = GoldLedgerEntry::findOrFail($id);
        $item->update($request->only($item->getFillable()));

        return $this->sendResponse($item, 'GoldLedgerEntry updated successfully.');
    }

    public function destroy($id)
    {
        $this->authorizeForUser(request()->user('api'), 'delete', GoldLedgerEntry::class);
        $item = GoldLedgerEntry::findOrFail($id);
        $item->delete();

        return $this->sendResponse([], 'GoldLedgerEntry deleted successfully.');
    }
}
