<?php

namespace App\Http\Controllers\Jewelry;

use App\Http\Controllers\BaseController;
use App\Models\MovementReason;
use Illuminate\Http\Request;

/**
 * Generic CRUD for `movement_reasons` (SRS domain, database/jewelrydatabase.sql).
 * Access is gated by a single per-resource Permission (app/Policies/Jewelry).
 */
class MovementReasonController extends BaseController
{
    public function index(Request $request)
    {
        $this->authorizeForUser(request()->user('api'), 'view', MovementReason::class);
        $perPage = (int) $request->input('limit', 15);
        $query = MovementReason::query();

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
        $this->authorizeForUser(request()->user('api'), 'create', MovementReason::class);
        $item = MovementReason::create($request->only((new MovementReason)->getFillable()));

        return $this->sendResponse($item, 'MovementReason created successfully.');
    }

    public function show($id)
    {
        $this->authorizeForUser(request()->user('api'), 'view', MovementReason::class);
        $item = MovementReason::findOrFail($id);

        return $this->sendResponse($item, 'MovementReason retrieved successfully.');
    }

    public function update(Request $request, $id)
    {
        $this->authorizeForUser(request()->user('api'), 'update', MovementReason::class);
        $item = MovementReason::findOrFail($id);
        $item->update($request->only($item->getFillable()));

        return $this->sendResponse($item, 'MovementReason updated successfully.');
    }

    public function destroy($id)
    {
        $this->authorizeForUser(request()->user('api'), 'delete', MovementReason::class);
        $item = MovementReason::findOrFail($id);
        $item->delete();

        return $this->sendResponse([], 'MovementReason deleted successfully.');
    }
}
