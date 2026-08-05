<?php

namespace App\Http\Controllers\Jewelry;

use App\Http\Controllers\BaseController;
use App\Models\QualityInspection;
use Illuminate\Http\Request;

/**
 * Generic CRUD for `quality_inspections` (SRS domain, database/jewelrydatabase.sql).
 * Access is gated by a single per-resource Permission (app/Policies/Jewelry).
 */
class QualityInspectionController extends BaseController
{
    public function index(Request $request)
    {
        $this->authorizeForUser(request()->user('api'), 'view', QualityInspection::class);
        $perPage = (int) $request->input('limit', 15);
        $query = QualityInspection::query();

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
        $this->authorizeForUser(request()->user('api'), 'create', QualityInspection::class);
        $item = QualityInspection::create($request->only((new QualityInspection)->getFillable()));

        return $this->sendResponse($item, 'QualityInspection created successfully.');
    }

    public function show($id)
    {
        $this->authorizeForUser(request()->user('api'), 'view', QualityInspection::class);
        $item = QualityInspection::findOrFail($id);

        return $this->sendResponse($item, 'QualityInspection retrieved successfully.');
    }

    public function update(Request $request, $id)
    {
        $this->authorizeForUser(request()->user('api'), 'update', QualityInspection::class);
        $item = QualityInspection::findOrFail($id);
        $item->update($request->only($item->getFillable()));

        return $this->sendResponse($item, 'QualityInspection updated successfully.');
    }

    public function destroy($id)
    {
        $this->authorizeForUser(request()->user('api'), 'delete', QualityInspection::class);
        $item = QualityInspection::findOrFail($id);
        $item->delete();

        return $this->sendResponse([], 'QualityInspection deleted successfully.');
    }
}
