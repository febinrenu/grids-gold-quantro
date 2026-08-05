<?php

namespace App\Http\Controllers\Jewelry;

use App\Http\Controllers\BaseController;
use App\Models\DisplayCabinet;
use Illuminate\Http\Request;

/**
 * Generic CRUD for `display_cabinets` (SRS domain, database/jewelrydatabase.sql).
 * Access is gated by a single per-resource Permission (app/Policies/Jewelry).
 */
class DisplayCabinetController extends BaseController
{
    public function index(Request $request)
    {
        $this->authorizeForUser(request()->user('api'), 'view', DisplayCabinet::class);
        $perPage = (int) $request->input('limit', 15);
        $query = DisplayCabinet::query();

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
        $this->authorizeForUser(request()->user('api'), 'create', DisplayCabinet::class);
        $item = DisplayCabinet::create($request->only((new DisplayCabinet)->getFillable()));

        return $this->sendResponse($item, 'DisplayCabinet created successfully.');
    }

    public function show($id)
    {
        $this->authorizeForUser(request()->user('api'), 'view', DisplayCabinet::class);
        $item = DisplayCabinet::findOrFail($id);

        return $this->sendResponse($item, 'DisplayCabinet retrieved successfully.');
    }

    public function update(Request $request, $id)
    {
        $this->authorizeForUser(request()->user('api'), 'update', DisplayCabinet::class);
        $item = DisplayCabinet::findOrFail($id);
        $item->update($request->only($item->getFillable()));

        return $this->sendResponse($item, 'DisplayCabinet updated successfully.');
    }

    public function destroy($id)
    {
        $this->authorizeForUser(request()->user('api'), 'delete', DisplayCabinet::class);
        $item = DisplayCabinet::findOrFail($id);
        $item->delete();

        return $this->sendResponse([], 'DisplayCabinet deleted successfully.');
    }
}
