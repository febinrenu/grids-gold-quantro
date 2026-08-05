<?php

namespace App\Http\Controllers\Jewelry;

use App\Http\Controllers\BaseController;
use App\Models\State;
use Illuminate\Http\Request;

/**
 * Generic CRUD for `states` (SRS domain, database/jewelrydatabase.sql).
 * Access is gated by a single per-resource Permission (app/Policies/Jewelry).
 */
class StateController extends BaseController
{
    public function index(Request $request)
    {
        $this->authorizeForUser(request()->user('api'), 'view', State::class);
        $perPage = (int) $request->input('limit', 15);
        $query = State::query();

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
        $this->authorizeForUser(request()->user('api'), 'create', State::class);
        $item = State::create($request->only((new State)->getFillable()));

        return $this->sendResponse($item, 'State created successfully.');
    }

    public function show($id)
    {
        $this->authorizeForUser(request()->user('api'), 'view', State::class);
        $item = State::findOrFail($id);

        return $this->sendResponse($item, 'State retrieved successfully.');
    }

    public function update(Request $request, $id)
    {
        $this->authorizeForUser(request()->user('api'), 'update', State::class);
        $item = State::findOrFail($id);
        $item->update($request->only($item->getFillable()));

        return $this->sendResponse($item, 'State updated successfully.');
    }

    public function destroy($id)
    {
        $this->authorizeForUser(request()->user('api'), 'delete', State::class);
        $item = State::findOrFail($id);
        $item->delete();

        return $this->sendResponse([], 'State deleted successfully.');
    }
}
