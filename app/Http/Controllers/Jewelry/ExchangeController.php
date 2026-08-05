<?php

namespace App\Http\Controllers\Jewelry;

use App\Http\Controllers\BaseController;
use App\Models\Exchange;
use Illuminate\Http\Request;

/**
 * Generic CRUD for `exchanges` (SRS domain, database/jewelrydatabase.sql).
 * Access is gated by a single per-resource Permission (app/Policies/Jewelry).
 */
class ExchangeController extends BaseController
{
    public function index(Request $request)
    {
        $this->authorizeForUser(request()->user('api'), 'view', Exchange::class);
        $perPage = (int) $request->input('limit', 15);
        $query = Exchange::query();

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
        $this->authorizeForUser(request()->user('api'), 'create', Exchange::class);
        $item = Exchange::create($request->only((new Exchange)->getFillable()));

        return $this->sendResponse($item, 'Exchange created successfully.');
    }

    public function show($id)
    {
        $this->authorizeForUser(request()->user('api'), 'view', Exchange::class);
        $item = Exchange::findOrFail($id);

        return $this->sendResponse($item, 'Exchange retrieved successfully.');
    }

    public function update(Request $request, $id)
    {
        $this->authorizeForUser(request()->user('api'), 'update', Exchange::class);
        $item = Exchange::findOrFail($id);
        $item->update($request->only($item->getFillable()));

        return $this->sendResponse($item, 'Exchange updated successfully.');
    }

    public function destroy($id)
    {
        $this->authorizeForUser(request()->user('api'), 'delete', Exchange::class);
        $item = Exchange::findOrFail($id);
        $item->delete();

        return $this->sendResponse([], 'Exchange deleted successfully.');
    }
}
