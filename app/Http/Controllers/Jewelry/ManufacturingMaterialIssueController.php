<?php

namespace App\Http\Controllers\Jewelry;

use App\Http\Controllers\BaseController;
use App\Models\ManufacturingMaterialIssue;
use Illuminate\Http\Request;

/**
 * Generic CRUD for `manufacturing_material_issues` (SRS domain, database/jewelrydatabase.sql).
 * Access is gated by a single per-resource Permission (app/Policies/Jewelry).
 */
class ManufacturingMaterialIssueController extends BaseController
{
    public function index(Request $request)
    {
        $this->authorizeForUser(request()->user('api'), 'view', ManufacturingMaterialIssue::class);
        $perPage = (int) $request->input('limit', 15);
        $query = ManufacturingMaterialIssue::query();

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
        $this->authorizeForUser(request()->user('api'), 'create', ManufacturingMaterialIssue::class);
        $item = ManufacturingMaterialIssue::create($request->only((new ManufacturingMaterialIssue)->getFillable()));

        return $this->sendResponse($item, 'ManufacturingMaterialIssue created successfully.');
    }

    public function show($id)
    {
        $this->authorizeForUser(request()->user('api'), 'view', ManufacturingMaterialIssue::class);
        $item = ManufacturingMaterialIssue::findOrFail($id);

        return $this->sendResponse($item, 'ManufacturingMaterialIssue retrieved successfully.');
    }

    public function update(Request $request, $id)
    {
        $this->authorizeForUser(request()->user('api'), 'update', ManufacturingMaterialIssue::class);
        $item = ManufacturingMaterialIssue::findOrFail($id);
        $item->update($request->only($item->getFillable()));

        return $this->sendResponse($item, 'ManufacturingMaterialIssue updated successfully.');
    }

    public function destroy($id)
    {
        $this->authorizeForUser(request()->user('api'), 'delete', ManufacturingMaterialIssue::class);
        $item = ManufacturingMaterialIssue::findOrFail($id);
        $item->delete();

        return $this->sendResponse([], 'ManufacturingMaterialIssue deleted successfully.');
    }
}
