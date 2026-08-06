<?php

namespace App\Http\Controllers\Jewelry;

use App\Http\Controllers\BaseController;
use App\Models\ManufacturingStoneIssue;
use Illuminate\Http\Request;

/**
 * Generic CRUD for `manufacturing_stone_issues` (SRS domain, database/jewelrydatabase.sql).
 * Access is gated by a single per-resource Permission (app/Policies/Jewelry).
 */
class ManufacturingStoneIssueController extends BaseController
{
    public function index(Request $request)
    {
        $this->authorizeForUser(request()->user('api'), 'view', ManufacturingStoneIssue::class);
        $perPage = (int) $request->input('limit', 15);
        $query = ManufacturingStoneIssue::query();

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
        $this->authorizeForUser(request()->user('api'), 'create', ManufacturingStoneIssue::class);
        $item = ManufacturingStoneIssue::create($request->only((new ManufacturingStoneIssue)->getFillable()));

        return $this->sendResponse($item, 'ManufacturingStoneIssue created successfully.');
    }

    public function show($id)
    {
        $this->authorizeForUser(request()->user('api'), 'view', ManufacturingStoneIssue::class);
        $item = ManufacturingStoneIssue::findOrFail($id);

        return $this->sendResponse($item, 'ManufacturingStoneIssue retrieved successfully.');
    }

    public function update(Request $request, $id)
    {
        $this->authorizeForUser(request()->user('api'), 'update', ManufacturingStoneIssue::class);
        $item = ManufacturingStoneIssue::findOrFail($id);
        $item->update($request->only($item->getFillable()));

        return $this->sendResponse($item, 'ManufacturingStoneIssue updated successfully.');
    }

    public function destroy($id)
    {
        $this->authorizeForUser(request()->user('api'), 'delete', ManufacturingStoneIssue::class);
        $item = ManufacturingStoneIssue::findOrFail($id);
        $item->delete();

        return $this->sendResponse([], 'ManufacturingStoneIssue deleted successfully.');
    }
}
