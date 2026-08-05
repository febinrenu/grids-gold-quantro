<?php

namespace App\Http\Controllers\Jewelry;

use App\Http\Controllers\BaseController;
use App\Models\ManufacturingDust;
use Illuminate\Http\Request;

/**
 * Generic CRUD for `manufacturing_dust` (SRS domain, database/jewelrydatabase.sql).
 * Access is gated by a single per-resource Permission (app/Policies/Jewelry).
 */
class ManufacturingDustController extends BaseController
{
    public function index(Request $request)
    {
        $this->authorizeForUser(request()->user('api'), 'view', ManufacturingDust::class);
        $perPage = (int) $request->input('limit', 15);
        $query = ManufacturingDust::query();

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
        $this->authorizeForUser(request()->user('api'), 'create', ManufacturingDust::class);
        $item = ManufacturingDust::create($request->only((new ManufacturingDust)->getFillable()));

        return $this->sendResponse($item, 'ManufacturingDust created successfully.');
    }

    public function show($id)
    {
        $this->authorizeForUser(request()->user('api'), 'view', ManufacturingDust::class);
        $item = ManufacturingDust::findOrFail($id);

        return $this->sendResponse($item, 'ManufacturingDust retrieved successfully.');
    }

    public function update(Request $request, $id)
    {
        $this->authorizeForUser(request()->user('api'), 'update', ManufacturingDust::class);
        $item = ManufacturingDust::findOrFail($id);
        $item->update($request->only($item->getFillable()));

        return $this->sendResponse($item, 'ManufacturingDust updated successfully.');
    }

    public function destroy($id)
    {
        $this->authorizeForUser(request()->user('api'), 'delete', ManufacturingDust::class);
        $item = ManufacturingDust::findOrFail($id);
        $item->delete();

        return $this->sendResponse([], 'ManufacturingDust deleted successfully.');
    }
}
