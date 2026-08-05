<?php

namespace App\Http\Controllers\Jewelry;

use App\Http\Controllers\BaseController;
use App\Models\ScheduledJob;
use Illuminate\Http\Request;

/**
 * Generic CRUD for `scheduled_jobs` (SRS domain, database/jewelrydatabase.sql).
 * Access is gated by a single per-resource Permission (app/Policies/Jewelry).
 */
class ScheduledJobController extends BaseController
{
    public function index(Request $request)
    {
        $this->authorizeForUser(request()->user('api'), 'view', ScheduledJob::class);
        $perPage = (int) $request->input('limit', 15);
        $query = ScheduledJob::query();

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
        $this->authorizeForUser(request()->user('api'), 'create', ScheduledJob::class);
        $item = ScheduledJob::create($request->only((new ScheduledJob)->getFillable()));

        return $this->sendResponse($item, 'ScheduledJob created successfully.');
    }

    public function show($id)
    {
        $this->authorizeForUser(request()->user('api'), 'view', ScheduledJob::class);
        $item = ScheduledJob::findOrFail($id);

        return $this->sendResponse($item, 'ScheduledJob retrieved successfully.');
    }

    public function update(Request $request, $id)
    {
        $this->authorizeForUser(request()->user('api'), 'update', ScheduledJob::class);
        $item = ScheduledJob::findOrFail($id);
        $item->update($request->only($item->getFillable()));

        return $this->sendResponse($item, 'ScheduledJob updated successfully.');
    }

    public function destroy($id)
    {
        $this->authorizeForUser(request()->user('api'), 'delete', ScheduledJob::class);
        $item = ScheduledJob::findOrFail($id);
        $item->delete();

        return $this->sendResponse([], 'ScheduledJob deleted successfully.');
    }
}
