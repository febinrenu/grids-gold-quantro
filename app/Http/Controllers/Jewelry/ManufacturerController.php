<?php

namespace App\Http\Controllers\Jewelry;

use App\Http\Controllers\BaseController;
use App\Models\Manufacturer;
use Illuminate\Http\Request;

/**
 * Generic CRUD for `manufacturers` (SRS domain, database/jewelrydatabase.sql).
 * Access is gated by a single per-resource Permission (app/Policies/Jewelry).
 */
class ManufacturerController extends BaseController
{
    public function index(Request $request)
    {
        $this->authorizeForUser(request()->user('api'), 'view', Manufacturer::class);
        $perPage = (int) $request->input('limit', 15);
        $query = Manufacturer::query();

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
        $this->authorizeForUser(request()->user('api'), 'create', Manufacturer::class);
        $item = Manufacturer::create($request->only((new Manufacturer)->getFillable()));

        return $this->sendResponse($item, 'Manufacturer created successfully.');
    }

    public function show($id)
    {
        $this->authorizeForUser(request()->user('api'), 'view', Manufacturer::class);
        $item = Manufacturer::findOrFail($id);

        return $this->sendResponse($item, 'Manufacturer retrieved successfully.');
    }

    public function update(Request $request, $id)
    {
        $this->authorizeForUser(request()->user('api'), 'update', Manufacturer::class);
        $item = Manufacturer::findOrFail($id);
        $item->update($request->only($item->getFillable()));

        return $this->sendResponse($item, 'Manufacturer updated successfully.');
    }

    public function destroy($id)
    {
        $this->authorizeForUser(request()->user('api'), 'delete', Manufacturer::class);
        $item = Manufacturer::findOrFail($id);
        $item->delete();

        return $this->sendResponse([], 'Manufacturer deleted successfully.');
    }
}
