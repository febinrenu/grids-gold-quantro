<?php

namespace App\Http\Controllers\Jewelry;

use App\Http\Controllers\BaseController;
use App\Models\Workshop;
use Illuminate\Http\Request;

/**
 * Generic CRUD for `workshops` (SRS domain, database/jewelrydatabase.sql).
 * Access is gated by a single per-resource Permission (app/Policies/Jewelry).
 */
class WorkshopController extends BaseController
{
    public function index(Request $request)
    {
        $this->authorizeForUser(request()->user('api'), 'view', Workshop::class);
        $perPage = (int) $request->input('limit', 15);
        $query = Workshop::query();

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
        $this->authorizeForUser(request()->user('api'), 'create', Workshop::class);
        $item = Workshop::create($request->only((new Workshop)->getFillable()));

        return $this->sendResponse($item, 'Workshop created successfully.');
    }

    public function show($id)
    {
        $this->authorizeForUser(request()->user('api'), 'view', Workshop::class);
        $item = Workshop::findOrFail($id);

        return $this->sendResponse($item, 'Workshop retrieved successfully.');
    }

    public function update(Request $request, $id)
    {
        $this->authorizeForUser(request()->user('api'), 'update', Workshop::class);
        $item = Workshop::findOrFail($id);
        $item->update($request->only($item->getFillable()));

        return $this->sendResponse($item, 'Workshop updated successfully.');
    }

    public function destroy($id)
    {
        $this->authorizeForUser(request()->user('api'), 'delete', Workshop::class);
        $item = Workshop::findOrFail($id);
        $item->delete();

        return $this->sendResponse([], 'Workshop deleted successfully.');
    }
}
