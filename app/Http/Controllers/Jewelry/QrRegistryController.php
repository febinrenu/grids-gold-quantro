<?php

namespace App\Http\Controllers\Jewelry;

use App\Http\Controllers\BaseController;
use App\Models\QrRegistry;
use Illuminate\Http\Request;

/**
 * Generic CRUD for `qr_registry` (SRS domain, database/jewelrydatabase.sql).
 * Access is gated by a single per-resource Permission (app/Policies/Jewelry).
 */
class QrRegistryController extends BaseController
{
    public function index(Request $request)
    {
        $this->authorizeForUser(request()->user('api'), 'view', QrRegistry::class);
        $perPage = (int) $request->input('limit', 15);
        $query = QrRegistry::query();

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
        $this->authorizeForUser(request()->user('api'), 'create', QrRegistry::class);
        $item = QrRegistry::create($request->only((new QrRegistry)->getFillable()));

        return $this->sendResponse($item, 'QrRegistry created successfully.');
    }

    public function show($id)
    {
        $this->authorizeForUser(request()->user('api'), 'view', QrRegistry::class);
        $item = QrRegistry::findOrFail($id);

        return $this->sendResponse($item, 'QrRegistry retrieved successfully.');
    }

    public function update(Request $request, $id)
    {
        $this->authorizeForUser(request()->user('api'), 'update', QrRegistry::class);
        $item = QrRegistry::findOrFail($id);
        $item->update($request->only($item->getFillable()));

        return $this->sendResponse($item, 'QrRegistry updated successfully.');
    }

    public function destroy($id)
    {
        $this->authorizeForUser(request()->user('api'), 'delete', QrRegistry::class);
        $item = QrRegistry::findOrFail($id);
        $item->delete();

        return $this->sendResponse([], 'QrRegistry deleted successfully.');
    }
}
