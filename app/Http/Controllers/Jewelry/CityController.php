<?php

namespace App\Http\Controllers\Jewelry;

use App\Http\Controllers\BaseController;
use App\Models\City;
use Illuminate\Http\Request;

/**
 * Generic CRUD for `cities` (SRS domain, database/jewelrydatabase.sql).
 * Access is gated by a single per-resource Permission (app/Policies/Jewelry).
 */
class CityController extends BaseController
{
    public function index(Request $request)
    {
        $this->authorizeForUser(request()->user('api'), 'view', City::class);
        $perPage = (int) $request->input('limit', 15);
        $query = City::query();

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
        $this->authorizeForUser(request()->user('api'), 'create', City::class);
        $item = City::create($request->only((new City)->getFillable()));

        return $this->sendResponse($item, 'City created successfully.');
    }

    public function show($id)
    {
        $this->authorizeForUser(request()->user('api'), 'view', City::class);
        $item = City::findOrFail($id);

        return $this->sendResponse($item, 'City retrieved successfully.');
    }

    public function update(Request $request, $id)
    {
        $this->authorizeForUser(request()->user('api'), 'update', City::class);
        $item = City::findOrFail($id);
        $item->update($request->only($item->getFillable()));

        return $this->sendResponse($item, 'City updated successfully.');
    }

    public function destroy($id)
    {
        $this->authorizeForUser(request()->user('api'), 'delete', City::class);
        $item = City::findOrFail($id);
        $item->delete();

        return $this->sendResponse([], 'City deleted successfully.');
    }
}
