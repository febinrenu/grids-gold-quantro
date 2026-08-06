<?php

namespace App\Http\Controllers\Jewelry;

use App\Http\Controllers\BaseController;
use App\Models\ReconciliationSession;
use Illuminate\Http\Request;

/**
 * Generic CRUD for `reconciliation_sessions` (SRS domain, database/jewelrydatabase.sql).
 * Access is gated by a single per-resource Permission (app/Policies/Jewelry).
 */
class ReconciliationSessionController extends BaseController
{
    public function index(Request $request)
    {
        $this->authorizeForUser(request()->user('api'), 'view', ReconciliationSession::class);
        $perPage = (int) $request->input('limit', 15);
        $query = ReconciliationSession::query();

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
        $this->authorizeForUser(request()->user('api'), 'create', ReconciliationSession::class);
        $item = ReconciliationSession::create($request->only((new ReconciliationSession)->getFillable()));

        return $this->sendResponse($item, 'ReconciliationSession created successfully.');
    }

    public function show($id)
    {
        $this->authorizeForUser(request()->user('api'), 'view', ReconciliationSession::class);
        $item = ReconciliationSession::findOrFail($id);

        return $this->sendResponse($item, 'ReconciliationSession retrieved successfully.');
    }

    public function update(Request $request, $id)
    {
        $this->authorizeForUser(request()->user('api'), 'update', ReconciliationSession::class);
        $item = ReconciliationSession::findOrFail($id);
        $item->update($request->only($item->getFillable()));

        return $this->sendResponse($item, 'ReconciliationSession updated successfully.');
    }

    public function destroy($id)
    {
        $this->authorizeForUser(request()->user('api'), 'delete', ReconciliationSession::class);
        $item = ReconciliationSession::findOrFail($id);
        $item->delete();

        return $this->sendResponse([], 'ReconciliationSession deleted successfully.');
    }
}
