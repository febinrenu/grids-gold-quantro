<?php

namespace App\Http\Controllers\Jewelry;

use App\Http\Controllers\BaseController;
use App\Models\GoldTest;
use Illuminate\Http\Request;

/**
 * Generic CRUD for `gold_tests` (SRS domain, database/jewelrydatabase.sql).
 * Access is gated by a single per-resource Permission (app/Policies/Jewelry).
 */
class GoldTestController extends BaseController
{
    public function index(Request $request)
    {
        $this->authorizeForUser(request()->user('api'), 'view', GoldTest::class);
        $perPage = (int) $request->input('limit', 15);
        $query = GoldTest::query();

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
        $this->authorizeForUser(request()->user('api'), 'create', GoldTest::class);
        $item = GoldTest::create($request->only((new GoldTest)->getFillable()));

        return $this->sendResponse($item, 'GoldTest created successfully.');
    }

    public function show($id)
    {
        $this->authorizeForUser(request()->user('api'), 'view', GoldTest::class);
        $item = GoldTest::findOrFail($id);

        return $this->sendResponse($item, 'GoldTest retrieved successfully.');
    }

    public function update(Request $request, $id)
    {
        $this->authorizeForUser(request()->user('api'), 'update', GoldTest::class);
        $item = GoldTest::findOrFail($id);
        $item->update($request->only($item->getFillable()));

        return $this->sendResponse($item, 'GoldTest updated successfully.');
    }

    public function destroy($id)
    {
        $this->authorizeForUser(request()->user('api'), 'delete', GoldTest::class);
        $item = GoldTest::findOrFail($id);
        $item->delete();

        return $this->sendResponse([], 'GoldTest deleted successfully.');
    }
}
