<?php

namespace App\Http\Controllers\Jewelry;

use App\Http\Controllers\BaseController;
use App\Models\RefiningBatch;
use Illuminate\Http\Request;

/**
 * Generic CRUD for `refining_batches` (SRS domain, database/jewelrydatabase.sql).
 * Access is gated by a single per-resource Permission (app/Policies/Jewelry).
 */
class RefiningBatchController extends BaseController
{
    public function index(Request $request)
    {
        $this->authorizeForUser(request()->user('api'), 'view', RefiningBatch::class);
        $perPage = (int) $request->input('limit', 15);
        $query = RefiningBatch::query();

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
        $this->authorizeForUser(request()->user('api'), 'create', RefiningBatch::class);
        $item = RefiningBatch::create($request->only((new RefiningBatch)->getFillable()));

        return $this->sendResponse($item, 'RefiningBatch created successfully.');
    }

    public function show($id)
    {
        $this->authorizeForUser(request()->user('api'), 'view', RefiningBatch::class);
        $item = RefiningBatch::findOrFail($id);

        return $this->sendResponse($item, 'RefiningBatch retrieved successfully.');
    }

    public function update(Request $request, $id)
    {
        $this->authorizeForUser(request()->user('api'), 'update', RefiningBatch::class);
        $item = RefiningBatch::findOrFail($id);
        $item->update($request->only($item->getFillable()));

        return $this->sendResponse($item, 'RefiningBatch updated successfully.');
    }

    public function destroy($id)
    {
        $this->authorizeForUser(request()->user('api'), 'delete', RefiningBatch::class);
        $item = RefiningBatch::findOrFail($id);
        $item->delete();

        return $this->sendResponse([], 'RefiningBatch deleted successfully.');
    }
}
