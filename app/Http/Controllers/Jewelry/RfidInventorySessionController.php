<?php

namespace App\Http\Controllers\Jewelry;

use App\Http\Controllers\BaseController;
use App\Models\RfidInventorySession;
use Illuminate\Http\Request;

/**
 * Generic CRUD for `rfid_inventory_sessions` (SRS domain, database/jewelrydatabase.sql).
 * Access is gated by a single per-resource Permission (app/Policies/Jewelry).
 */
class RfidInventorySessionController extends BaseController
{
    public function index(Request $request)
    {
        $this->authorizeForUser(request()->user('api'), 'view', RfidInventorySession::class);
        $perPage = (int) $request->input('limit', 15);
        $query = RfidInventorySession::query();

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
        $this->authorizeForUser(request()->user('api'), 'create', RfidInventorySession::class);
        $item = RfidInventorySession::create($request->only((new RfidInventorySession)->getFillable()));

        return $this->sendResponse($item, 'RfidInventorySession created successfully.');
    }

    public function show($id)
    {
        $this->authorizeForUser(request()->user('api'), 'view', RfidInventorySession::class);
        $item = RfidInventorySession::findOrFail($id);

        return $this->sendResponse($item, 'RfidInventorySession retrieved successfully.');
    }

    public function update(Request $request, $id)
    {
        $this->authorizeForUser(request()->user('api'), 'update', RfidInventorySession::class);
        $item = RfidInventorySession::findOrFail($id);
        $item->update($request->only($item->getFillable()));

        return $this->sendResponse($item, 'RfidInventorySession updated successfully.');
    }

    public function destroy($id)
    {
        $this->authorizeForUser(request()->user('api'), 'delete', RfidInventorySession::class);
        $item = RfidInventorySession::findOrFail($id);
        $item->delete();

        return $this->sendResponse([], 'RfidInventorySession deleted successfully.');
    }
}
