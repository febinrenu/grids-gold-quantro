<?php

namespace App\Http\Controllers\Jewelry;

use App\Http\Controllers\BaseController;
use App\Models\ManufacturingScrap;
use Illuminate\Http\Request;

/**
 * Generic CRUD for `manufacturing_scrap` (SRS domain, database/jewelrydatabase.sql).
 * Access is gated by a single per-resource Permission (app/Policies/Jewelry).
 */
class ManufacturingScrapController extends BaseController
{
    public function index(Request $request)
    {
        $this->authorizeForUser(request()->user('api'), 'view', ManufacturingScrap::class);
        $perPage = (int) $request->input('limit', 15);
        $query = ManufacturingScrap::query();

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
        $this->authorizeForUser(request()->user('api'), 'create', ManufacturingScrap::class);
        $item = ManufacturingScrap::create($request->only((new ManufacturingScrap)->getFillable()));

        return $this->sendResponse($item, 'ManufacturingScrap created successfully.');
    }

    public function show($id)
    {
        $this->authorizeForUser(request()->user('api'), 'view', ManufacturingScrap::class);
        $item = ManufacturingScrap::findOrFail($id);

        return $this->sendResponse($item, 'ManufacturingScrap retrieved successfully.');
    }

    public function update(Request $request, $id)
    {
        $this->authorizeForUser(request()->user('api'), 'update', ManufacturingScrap::class);
        $item = ManufacturingScrap::findOrFail($id);
        $item->update($request->only($item->getFillable()));

        return $this->sendResponse($item, 'ManufacturingScrap updated successfully.');
    }

    public function destroy($id)
    {
        $this->authorizeForUser(request()->user('api'), 'delete', ManufacturingScrap::class);
        $item = ManufacturingScrap::findOrFail($id);
        $item->delete();

        return $this->sendResponse([], 'ManufacturingScrap deleted successfully.');
    }
}
