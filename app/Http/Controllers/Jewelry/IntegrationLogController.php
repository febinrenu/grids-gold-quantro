<?php

namespace App\Http\Controllers\Jewelry;

use App\Http\Controllers\BaseController;
use App\Models\IntegrationLog;
use Illuminate\Http\Request;

/**
 * Generic CRUD for `integration_logs` (SRS domain, database/jewelrydatabase.sql).
 * Access is gated by a single per-resource Permission (app/Policies/Jewelry).
 */
class IntegrationLogController extends BaseController
{
    public function index(Request $request)
    {
        $this->authorizeForUser(request()->user('api'), 'view', IntegrationLog::class);
        $perPage = (int) $request->input('limit', 15);
        $query = IntegrationLog::query();

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
        $this->authorizeForUser(request()->user('api'), 'create', IntegrationLog::class);
        $item = IntegrationLog::create($request->only((new IntegrationLog)->getFillable()));

        return $this->sendResponse($item, 'IntegrationLog created successfully.');
    }

    public function show($id)
    {
        $this->authorizeForUser(request()->user('api'), 'view', IntegrationLog::class);
        $item = IntegrationLog::findOrFail($id);

        return $this->sendResponse($item, 'IntegrationLog retrieved successfully.');
    }

    public function update(Request $request, $id)
    {
        $this->authorizeForUser(request()->user('api'), 'update', IntegrationLog::class);
        $item = IntegrationLog::findOrFail($id);
        $item->update($request->only($item->getFillable()));

        return $this->sendResponse($item, 'IntegrationLog updated successfully.');
    }

    public function destroy($id)
    {
        $this->authorizeForUser(request()->user('api'), 'delete', IntegrationLog::class);
        $item = IntegrationLog::findOrFail($id);
        $item->delete();

        return $this->sendResponse([], 'IntegrationLog deleted successfully.');
    }
}
