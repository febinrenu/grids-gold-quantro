<?php

namespace App\Http\Controllers\Jewelry;

use App\Http\Controllers\BaseController;
use App\Models\ManufacturingQc;
use Illuminate\Http\Request;

/**
 * Generic CRUD for `manufacturing_qc` (SRS domain, database/jewelrydatabase.sql).
 * Access is gated by a single per-resource Permission (app/Policies/Jewelry).
 */
class ManufacturingQcController extends BaseController
{
    public function index(Request $request)
    {
        $this->authorizeForUser(request()->user('api'), 'view', ManufacturingQc::class);
        $perPage = (int) $request->input('limit', 15);
        $query = ManufacturingQc::query();

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
        $this->authorizeForUser(request()->user('api'), 'create', ManufacturingQc::class);
        $item = ManufacturingQc::create($request->only((new ManufacturingQc)->getFillable()));

        return $this->sendResponse($item, 'ManufacturingQc created successfully.');
    }

    public function show($id)
    {
        $this->authorizeForUser(request()->user('api'), 'view', ManufacturingQc::class);
        $item = ManufacturingQc::findOrFail($id);

        return $this->sendResponse($item, 'ManufacturingQc retrieved successfully.');
    }

    public function update(Request $request, $id)
    {
        $this->authorizeForUser(request()->user('api'), 'update', ManufacturingQc::class);
        $item = ManufacturingQc::findOrFail($id);
        $item->update($request->only($item->getFillable()));

        return $this->sendResponse($item, 'ManufacturingQc updated successfully.');
    }

    public function destroy($id)
    {
        $this->authorizeForUser(request()->user('api'), 'delete', ManufacturingQc::class);
        $item = ManufacturingQc::findOrFail($id);
        $item->delete();

        return $this->sendResponse([], 'ManufacturingQc deleted successfully.');
    }
}
