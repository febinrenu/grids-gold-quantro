<?php

namespace App\Http\Controllers\Jewelry;

use App\Http\Controllers\BaseController;
use App\Models\IntegrationEndpoint;
use Illuminate\Http\Request;

/**
 * Generic CRUD for `integration_endpoints` (SRS domain, database/jewelrydatabase.sql).
 * Access is gated by a single per-resource Permission (app/Policies/Jewelry).
 */
class IntegrationEndpointController extends BaseController
{
    public function index(Request $request)
    {
        $this->authorizeForUser(request()->user('api'), 'view', IntegrationEndpoint::class);
        $perPage = (int) $request->input('limit', 15);
        $query = IntegrationEndpoint::query();

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
        $this->authorizeForUser(request()->user('api'), 'create', IntegrationEndpoint::class);
        $item = IntegrationEndpoint::create($request->only((new IntegrationEndpoint)->getFillable()));

        return $this->sendResponse($item, 'IntegrationEndpoint created successfully.');
    }

    public function show($id)
    {
        $this->authorizeForUser(request()->user('api'), 'view', IntegrationEndpoint::class);
        $item = IntegrationEndpoint::findOrFail($id);

        return $this->sendResponse($item, 'IntegrationEndpoint retrieved successfully.');
    }

    public function update(Request $request, $id)
    {
        $this->authorizeForUser(request()->user('api'), 'update', IntegrationEndpoint::class);
        $item = IntegrationEndpoint::findOrFail($id);
        $item->update($request->only($item->getFillable()));

        return $this->sendResponse($item, 'IntegrationEndpoint updated successfully.');
    }

    public function destroy($id)
    {
        $this->authorizeForUser(request()->user('api'), 'delete', IntegrationEndpoint::class);
        $item = IntegrationEndpoint::findOrFail($id);
        $item->delete();

        return $this->sendResponse([], 'IntegrationEndpoint deleted successfully.');
    }
}
