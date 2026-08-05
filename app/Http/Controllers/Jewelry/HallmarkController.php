<?php

namespace App\Http\Controllers\Jewelry;

use App\Http\Controllers\BaseController;
use App\Models\Hallmark;
use Illuminate\Http\Request;

/**
 * Generic CRUD for `hallmarks` (SRS domain, database/jewelrydatabase.sql).
 * Access is gated by a single per-resource Permission (app/Policies/Jewelry).
 */
class HallmarkController extends BaseController
{
    public function index(Request $request)
    {
        $this->authorizeForUser(request()->user('api'), 'view', Hallmark::class);
        $perPage = (int) $request->input('limit', 15);
        $query = Hallmark::query();

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
        $this->authorizeForUser(request()->user('api'), 'create', Hallmark::class);
        $item = Hallmark::create($request->only((new Hallmark)->getFillable()));

        return $this->sendResponse($item, 'Hallmark created successfully.');
    }

    public function show($id)
    {
        $this->authorizeForUser(request()->user('api'), 'view', Hallmark::class);
        $item = Hallmark::findOrFail($id);

        return $this->sendResponse($item, 'Hallmark retrieved successfully.');
    }

    public function update(Request $request, $id)
    {
        $this->authorizeForUser(request()->user('api'), 'update', Hallmark::class);
        $item = Hallmark::findOrFail($id);
        $item->update($request->only($item->getFillable()));

        return $this->sendResponse($item, 'Hallmark updated successfully.');
    }

    public function destroy($id)
    {
        $this->authorizeForUser(request()->user('api'), 'delete', Hallmark::class);
        $item = Hallmark::findOrFail($id);
        $item->delete();

        return $this->sendResponse([], 'Hallmark deleted successfully.');
    }
}
