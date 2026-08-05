<?php

namespace App\Http\Controllers\Jewelry;

use App\Http\Controllers\BaseController;
use App\Models\MeltingBatch;
use Illuminate\Http\Request;

/**
 * Generic CRUD for `melting_batches` (SRS domain, database/jewelrydatabase.sql).
 * Access is gated by a single per-resource Permission (app/Policies/Jewelry).
 */
class MeltingBatchController extends BaseController
{
    public function index(Request $request)
    {
        $this->authorizeForUser(request()->user('api'), 'view', MeltingBatch::class);
        $perPage = (int) $request->input('limit', 15);
        $query = MeltingBatch::query();

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
        $this->authorizeForUser(request()->user('api'), 'create', MeltingBatch::class);
        $item = MeltingBatch::create($request->only((new MeltingBatch)->getFillable()));

        return $this->sendResponse($item, 'MeltingBatch created successfully.');
    }

    public function show($id)
    {
        $this->authorizeForUser(request()->user('api'), 'view', MeltingBatch::class);
        $item = MeltingBatch::findOrFail($id);

        return $this->sendResponse($item, 'MeltingBatch retrieved successfully.');
    }

    public function update(Request $request, $id)
    {
        $this->authorizeForUser(request()->user('api'), 'update', MeltingBatch::class);
        $item = MeltingBatch::findOrFail($id);
        $item->update($request->only($item->getFillable()));

        return $this->sendResponse($item, 'MeltingBatch updated successfully.');
    }

    public function destroy($id)
    {
        $this->authorizeForUser(request()->user('api'), 'delete', MeltingBatch::class);
        $item = MeltingBatch::findOrFail($id);
        $item->delete();

        return $this->sendResponse([], 'MeltingBatch deleted successfully.');
    }
}
