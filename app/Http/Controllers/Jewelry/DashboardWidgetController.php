<?php

namespace App\Http\Controllers\Jewelry;

use App\Http\Controllers\BaseController;
use App\Models\DashboardWidget;
use Illuminate\Http\Request;

/**
 * Generic CRUD for `dashboard_widgets` (SRS domain, database/jewelrydatabase.sql).
 * Access is gated by a single per-resource Permission (app/Policies/Jewelry).
 */
class DashboardWidgetController extends BaseController
{
    public function index(Request $request)
    {
        $this->authorizeForUser(request()->user('api'), 'view', DashboardWidget::class);
        $perPage = (int) $request->input('limit', 15);
        $query = DashboardWidget::query();

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
        $this->authorizeForUser(request()->user('api'), 'create', DashboardWidget::class);
        $item = DashboardWidget::create($request->only((new DashboardWidget)->getFillable()));

        return $this->sendResponse($item, 'DashboardWidget created successfully.');
    }

    public function show($id)
    {
        $this->authorizeForUser(request()->user('api'), 'view', DashboardWidget::class);
        $item = DashboardWidget::findOrFail($id);

        return $this->sendResponse($item, 'DashboardWidget retrieved successfully.');
    }

    public function update(Request $request, $id)
    {
        $this->authorizeForUser(request()->user('api'), 'update', DashboardWidget::class);
        $item = DashboardWidget::findOrFail($id);
        $item->update($request->only($item->getFillable()));

        return $this->sendResponse($item, 'DashboardWidget updated successfully.');
    }

    public function destroy($id)
    {
        $this->authorizeForUser(request()->user('api'), 'delete', DashboardWidget::class);
        $item = DashboardWidget::findOrFail($id);
        $item->delete();

        return $this->sendResponse([], 'DashboardWidget deleted successfully.');
    }
}
