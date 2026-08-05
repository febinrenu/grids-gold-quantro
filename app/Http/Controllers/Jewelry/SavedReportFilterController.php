<?php

namespace App\Http\Controllers\Jewelry;

use App\Http\Controllers\BaseController;
use App\Models\SavedReportFilter;
use Illuminate\Http\Request;

/**
 * Generic CRUD for `saved_report_filters` (SRS domain, database/jewelrydatabase.sql).
 * Access is gated by a single per-resource Permission (app/Policies/Jewelry).
 */
class SavedReportFilterController extends BaseController
{
    public function index(Request $request)
    {
        $this->authorizeForUser(request()->user('api'), 'view', SavedReportFilter::class);
        $perPage = (int) $request->input('limit', 15);
        $query = SavedReportFilter::query();

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
        $this->authorizeForUser(request()->user('api'), 'create', SavedReportFilter::class);
        $item = SavedReportFilter::create($request->only((new SavedReportFilter)->getFillable()));

        return $this->sendResponse($item, 'SavedReportFilter created successfully.');
    }

    public function show($id)
    {
        $this->authorizeForUser(request()->user('api'), 'view', SavedReportFilter::class);
        $item = SavedReportFilter::findOrFail($id);

        return $this->sendResponse($item, 'SavedReportFilter retrieved successfully.');
    }

    public function update(Request $request, $id)
    {
        $this->authorizeForUser(request()->user('api'), 'update', SavedReportFilter::class);
        $item = SavedReportFilter::findOrFail($id);
        $item->update($request->only($item->getFillable()));

        return $this->sendResponse($item, 'SavedReportFilter updated successfully.');
    }

    public function destroy($id)
    {
        $this->authorizeForUser(request()->user('api'), 'delete', SavedReportFilter::class);
        $item = SavedReportFilter::findOrFail($id);
        $item->delete();

        return $this->sendResponse([], 'SavedReportFilter deleted successfully.');
    }
}
