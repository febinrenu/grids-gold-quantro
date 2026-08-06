<?php

namespace App\Http\Controllers\Jewelry;

use App\Http\Controllers\BaseController;
use App\Models\ReportDefinition;
use Illuminate\Http\Request;

/**
 * Generic CRUD for `report_definitions` (SRS domain, database/jewelrydatabase.sql).
 * Access is gated by a single per-resource Permission (app/Policies/Jewelry).
 */
class ReportDefinitionController extends BaseController
{
    public function index(Request $request)
    {
        $this->authorizeForUser(request()->user('api'), 'view', ReportDefinition::class);
        $perPage = (int) $request->input('limit', 15);
        $query = ReportDefinition::query();

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
        $this->authorizeForUser(request()->user('api'), 'create', ReportDefinition::class);
        $item = ReportDefinition::create($request->only((new ReportDefinition)->getFillable()));

        return $this->sendResponse($item, 'ReportDefinition created successfully.');
    }

    public function show($id)
    {
        $this->authorizeForUser(request()->user('api'), 'view', ReportDefinition::class);
        $item = ReportDefinition::findOrFail($id);

        return $this->sendResponse($item, 'ReportDefinition retrieved successfully.');
    }

    public function update(Request $request, $id)
    {
        $this->authorizeForUser(request()->user('api'), 'update', ReportDefinition::class);
        $item = ReportDefinition::findOrFail($id);
        $item->update($request->only($item->getFillable()));

        return $this->sendResponse($item, 'ReportDefinition updated successfully.');
    }

    public function destroy($id)
    {
        $this->authorizeForUser(request()->user('api'), 'delete', ReportDefinition::class);
        $item = ReportDefinition::findOrFail($id);
        $item->delete();

        return $this->sendResponse([], 'ReportDefinition deleted successfully.');
    }
}
