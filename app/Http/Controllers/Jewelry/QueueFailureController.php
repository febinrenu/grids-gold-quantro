<?php

namespace App\Http\Controllers\Jewelry;

use App\Http\Controllers\BaseController;
use App\Models\QueueFailure;
use Illuminate\Http\Request;

/**
 * Generic CRUD for `queue_failures` (SRS domain, database/jewelrydatabase.sql).
 * Access is gated by a single per-resource Permission (app/Policies/Jewelry).
 */
class QueueFailureController extends BaseController
{
    public function index(Request $request)
    {
        $this->authorizeForUser(request()->user('api'), 'view', QueueFailure::class);
        $perPage = (int) $request->input('limit', 15);
        $query = QueueFailure::query();

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
        $this->authorizeForUser(request()->user('api'), 'create', QueueFailure::class);
        $item = QueueFailure::create($request->only((new QueueFailure)->getFillable()));

        return $this->sendResponse($item, 'QueueFailure created successfully.');
    }

    public function show($id)
    {
        $this->authorizeForUser(request()->user('api'), 'view', QueueFailure::class);
        $item = QueueFailure::findOrFail($id);

        return $this->sendResponse($item, 'QueueFailure retrieved successfully.');
    }

    public function update(Request $request, $id)
    {
        $this->authorizeForUser(request()->user('api'), 'update', QueueFailure::class);
        $item = QueueFailure::findOrFail($id);
        $item->update($request->only($item->getFillable()));

        return $this->sendResponse($item, 'QueueFailure updated successfully.');
    }

    public function destroy($id)
    {
        $this->authorizeForUser(request()->user('api'), 'delete', QueueFailure::class);
        $item = QueueFailure::findOrFail($id);
        $item->delete();

        return $this->sendResponse([], 'QueueFailure deleted successfully.');
    }
}
