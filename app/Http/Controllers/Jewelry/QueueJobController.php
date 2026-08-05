<?php

namespace App\Http\Controllers\Jewelry;

use App\Http\Controllers\BaseController;
use App\Models\QueueJob;
use Illuminate\Http\Request;

/**
 * Generic CRUD for `queue_jobs` (SRS domain, database/jewelrydatabase.sql).
 * Access is gated by a single per-resource Permission (app/Policies/Jewelry).
 */
class QueueJobController extends BaseController
{
    public function index(Request $request)
    {
        $this->authorizeForUser(request()->user('api'), 'view', QueueJob::class);
        $perPage = (int) $request->input('limit', 15);
        $query = QueueJob::query();

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
        $this->authorizeForUser(request()->user('api'), 'create', QueueJob::class);
        $item = QueueJob::create($request->only((new QueueJob)->getFillable()));

        return $this->sendResponse($item, 'QueueJob created successfully.');
    }

    public function show($id)
    {
        $this->authorizeForUser(request()->user('api'), 'view', QueueJob::class);
        $item = QueueJob::findOrFail($id);

        return $this->sendResponse($item, 'QueueJob retrieved successfully.');
    }

    public function update(Request $request, $id)
    {
        $this->authorizeForUser(request()->user('api'), 'update', QueueJob::class);
        $item = QueueJob::findOrFail($id);
        $item->update($request->only($item->getFillable()));

        return $this->sendResponse($item, 'QueueJob updated successfully.');
    }

    public function destroy($id)
    {
        $this->authorizeForUser(request()->user('api'), 'delete', QueueJob::class);
        $item = QueueJob::findOrFail($id);
        $item->delete();

        return $this->sendResponse([], 'QueueJob deleted successfully.');
    }
}
