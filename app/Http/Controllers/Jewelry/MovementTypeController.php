<?php

namespace App\Http\Controllers\Jewelry;

use App\Http\Controllers\BaseController;
use App\Models\MovementType;
use Illuminate\Http\Request;

/**
 * Generic CRUD for `movement_types` (SRS domain, database/jewelrydatabase.sql).
 * Access is gated by a single per-resource Permission (app/Policies/Jewelry).
 */
class MovementTypeController extends BaseController
{
    public function index(Request $request)
    {
        $this->authorizeForUser(request()->user('api'), 'view', MovementType::class);
        $perPage = (int) $request->input('limit', 15);
        $query = MovementType::query();

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
        $this->authorizeForUser(request()->user('api'), 'create', MovementType::class);
        $item = MovementType::create($request->only((new MovementType)->getFillable()));

        return $this->sendResponse($item, 'MovementType created successfully.');
    }

    public function show($id)
    {
        $this->authorizeForUser(request()->user('api'), 'view', MovementType::class);
        $item = MovementType::findOrFail($id);

        return $this->sendResponse($item, 'MovementType retrieved successfully.');
    }

    public function update(Request $request, $id)
    {
        $this->authorizeForUser(request()->user('api'), 'update', MovementType::class);
        $item = MovementType::findOrFail($id);
        $item->update($request->only($item->getFillable()));

        return $this->sendResponse($item, 'MovementType updated successfully.');
    }

    public function destroy($id)
    {
        $this->authorizeForUser(request()->user('api'), 'delete', MovementType::class);
        $item = MovementType::findOrFail($id);
        $item->delete();

        return $this->sendResponse([], 'MovementType deleted successfully.');
    }
}
