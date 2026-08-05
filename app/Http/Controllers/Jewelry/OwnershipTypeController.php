<?php

namespace App\Http\Controllers\Jewelry;

use App\Http\Controllers\BaseController;
use App\Models\OwnershipType;
use Illuminate\Http\Request;

/**
 * Generic CRUD for `ownership_types` (SRS domain, database/jewelrydatabase.sql).
 * Access is gated by a single per-resource Permission (app/Policies/Jewelry).
 */
class OwnershipTypeController extends BaseController
{
    public function index(Request $request)
    {
        $this->authorizeForUser(request()->user('api'), 'view', OwnershipType::class);
        $perPage = (int) $request->input('limit', 15);
        $query = OwnershipType::query();

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
        $this->authorizeForUser(request()->user('api'), 'create', OwnershipType::class);
        $item = OwnershipType::create($request->only((new OwnershipType)->getFillable()));

        return $this->sendResponse($item, 'OwnershipType created successfully.');
    }

    public function show($id)
    {
        $this->authorizeForUser(request()->user('api'), 'view', OwnershipType::class);
        $item = OwnershipType::findOrFail($id);

        return $this->sendResponse($item, 'OwnershipType retrieved successfully.');
    }

    public function update(Request $request, $id)
    {
        $this->authorizeForUser(request()->user('api'), 'update', OwnershipType::class);
        $item = OwnershipType::findOrFail($id);
        $item->update($request->only($item->getFillable()));

        return $this->sendResponse($item, 'OwnershipType updated successfully.');
    }

    public function destroy($id)
    {
        $this->authorizeForUser(request()->user('api'), 'delete', OwnershipType::class);
        $item = OwnershipType::findOrFail($id);
        $item->delete();

        return $this->sendResponse([], 'OwnershipType deleted successfully.');
    }
}
