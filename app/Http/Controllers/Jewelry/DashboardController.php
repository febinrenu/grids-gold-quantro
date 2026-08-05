<?php

namespace App\Http\Controllers\Jewelry;

use App\Http\Controllers\BaseController;
use App\Models\Dashboard;
use Illuminate\Http\Request;

/**
 * Generic CRUD for `dashboards` (SRS domain, database/jewelrydatabase.sql).
 * Access is gated by a single per-resource Permission (app/Policies/Jewelry).
 */
class DashboardController extends BaseController
{
    public function index(Request $request)
    {
        $this->authorizeForUser(request()->user('api'), 'view', Dashboard::class);
        $perPage = (int) $request->input('limit', 15);
        $query = Dashboard::query();

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
        $this->authorizeForUser(request()->user('api'), 'create', Dashboard::class);
        $item = Dashboard::create($request->only((new Dashboard)->getFillable()));

        return $this->sendResponse($item, 'Dashboard created successfully.');
    }

    public function show($id)
    {
        $this->authorizeForUser(request()->user('api'), 'view', Dashboard::class);
        $item = Dashboard::findOrFail($id);

        return $this->sendResponse($item, 'Dashboard retrieved successfully.');
    }

    public function update(Request $request, $id)
    {
        $this->authorizeForUser(request()->user('api'), 'update', Dashboard::class);
        $item = Dashboard::findOrFail($id);
        $item->update($request->only($item->getFillable()));

        return $this->sendResponse($item, 'Dashboard updated successfully.');
    }

    public function destroy($id)
    {
        $this->authorizeForUser(request()->user('api'), 'delete', Dashboard::class);
        $item = Dashboard::findOrFail($id);
        $item->delete();

        return $this->sendResponse([], 'Dashboard deleted successfully.');
    }
}
