<?php

namespace App\Http\Controllers\Jewelry;

use App\Http\Controllers\BaseController;
use App\Models\WorkshopSettlement;
use Illuminate\Http\Request;

/**
 * Generic CRUD for `workshop_settlements` (SRS domain, database/jewelrydatabase.sql).
 * Access is gated by a single per-resource Permission (app/Policies/Jewelry).
 */
class WorkshopSettlementController extends BaseController
{
    public function index(Request $request)
    {
        $this->authorizeForUser(request()->user('api'), 'view', WorkshopSettlement::class);
        $perPage = (int) $request->input('limit', 15);
        $query = WorkshopSettlement::query();

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
        $this->authorizeForUser(request()->user('api'), 'create', WorkshopSettlement::class);
        $item = WorkshopSettlement::create($request->only((new WorkshopSettlement)->getFillable()));

        return $this->sendResponse($item, 'WorkshopSettlement created successfully.');
    }

    public function show($id)
    {
        $this->authorizeForUser(request()->user('api'), 'view', WorkshopSettlement::class);
        $item = WorkshopSettlement::findOrFail($id);

        return $this->sendResponse($item, 'WorkshopSettlement retrieved successfully.');
    }

    public function update(Request $request, $id)
    {
        $this->authorizeForUser(request()->user('api'), 'update', WorkshopSettlement::class);
        $item = WorkshopSettlement::findOrFail($id);
        $item->update($request->only($item->getFillable()));

        return $this->sendResponse($item, 'WorkshopSettlement updated successfully.');
    }

    public function destroy($id)
    {
        $this->authorizeForUser(request()->user('api'), 'delete', WorkshopSettlement::class);
        $item = WorkshopSettlement::findOrFail($id);
        $item->delete();

        return $this->sendResponse([], 'WorkshopSettlement deleted successfully.');
    }
}
