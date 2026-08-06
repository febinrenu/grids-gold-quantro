<?php

namespace App\Http\Controllers\Jewelry;

use App\Http\Controllers\BaseController;
use App\Models\ApiToken;
use Illuminate\Http\Request;

/**
 * Generic CRUD for `api_tokens` (SRS domain, database/jewelrydatabase.sql).
 * Access is gated by a single per-resource Permission (app/Policies/Jewelry).
 */
class ApiTokenController extends BaseController
{
    public function index(Request $request)
    {
        $this->authorizeForUser(request()->user('api'), 'view', ApiToken::class);
        $perPage = (int) $request->input('limit', 15);
        $query = ApiToken::query();

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
        $this->authorizeForUser(request()->user('api'), 'create', ApiToken::class);
        $item = ApiToken::create($request->only((new ApiToken)->getFillable()));

        return $this->sendResponse($item, 'ApiToken created successfully.');
    }

    public function show($id)
    {
        $this->authorizeForUser(request()->user('api'), 'view', ApiToken::class);
        $item = ApiToken::findOrFail($id);

        return $this->sendResponse($item, 'ApiToken retrieved successfully.');
    }

    public function update(Request $request, $id)
    {
        $this->authorizeForUser(request()->user('api'), 'update', ApiToken::class);
        $item = ApiToken::findOrFail($id);
        $item->update($request->only($item->getFillable()));

        return $this->sendResponse($item, 'ApiToken updated successfully.');
    }

    public function destroy($id)
    {
        $this->authorizeForUser(request()->user('api'), 'delete', ApiToken::class);
        $item = ApiToken::findOrFail($id);
        $item->delete();

        return $this->sendResponse([], 'ApiToken deleted successfully.');
    }
}
