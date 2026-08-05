<?php

namespace App\Http\Controllers\Jewelry;

use App\Http\Controllers\BaseController;
use App\Models\Branch;
use Illuminate\Http\Request;

/**
 * Generic CRUD for `branches` (SRS domain, database/jewelrydatabase.sql).
 * Access is gated by a single per-resource Permission (app/Policies/Jewelry).
 */
class BranchController extends BaseController
{
    public function index(Request $request)
    {
        $this->authorizeForUser(request()->user('api'), 'view', Branch::class);
        $perPage = (int) $request->input('limit', 15);
        $query = Branch::query();

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
        $this->authorizeForUser(request()->user('api'), 'create', Branch::class);
        $item = Branch::create($request->only((new Branch)->getFillable()));

        return $this->sendResponse($item, 'Branch created successfully.');
    }

    public function show($id)
    {
        $this->authorizeForUser(request()->user('api'), 'view', Branch::class);
        $item = Branch::findOrFail($id);

        return $this->sendResponse($item, 'Branch retrieved successfully.');
    }

    public function update(Request $request, $id)
    {
        $this->authorizeForUser(request()->user('api'), 'update', Branch::class);
        $item = Branch::findOrFail($id);
        $item->update($request->only($item->getFillable()));

        return $this->sendResponse($item, 'Branch updated successfully.');
    }

    public function destroy($id)
    {
        $this->authorizeForUser(request()->user('api'), 'delete', Branch::class);
        $item = Branch::findOrFail($id);
        $item->delete();

        return $this->sendResponse([], 'Branch deleted successfully.');
    }
}
