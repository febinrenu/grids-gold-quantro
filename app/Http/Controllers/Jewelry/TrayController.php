<?php

namespace App\Http\Controllers\Jewelry;

use App\Http\Controllers\BaseController;
use App\Models\Tray;
use Illuminate\Http\Request;

/**
 * Generic CRUD for `trays` (SRS domain, database/jewelrydatabase.sql).
 * Access is gated by a single per-resource Permission (app/Policies/Jewelry).
 */
class TrayController extends BaseController
{
    public function index(Request $request)
    {
        $this->authorizeForUser(request()->user('api'), 'view', Tray::class);
        $perPage = (int) $request->input('limit', 15);
        $query = Tray::query();

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
        $this->authorizeForUser(request()->user('api'), 'create', Tray::class);
        $item = Tray::create($request->only((new Tray)->getFillable()));

        return $this->sendResponse($item, 'Tray created successfully.');
    }

    public function show($id)
    {
        $this->authorizeForUser(request()->user('api'), 'view', Tray::class);
        $item = Tray::findOrFail($id);

        return $this->sendResponse($item, 'Tray retrieved successfully.');
    }

    public function update(Request $request, $id)
    {
        $this->authorizeForUser(request()->user('api'), 'update', Tray::class);
        $item = Tray::findOrFail($id);
        $item->update($request->only($item->getFillable()));

        return $this->sendResponse($item, 'Tray updated successfully.');
    }

    public function destroy($id)
    {
        $this->authorizeForUser(request()->user('api'), 'delete', Tray::class);
        $item = Tray::findOrFail($id);
        $item->delete();

        return $this->sendResponse([], 'Tray deleted successfully.');
    }
}
