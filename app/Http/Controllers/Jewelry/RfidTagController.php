<?php

namespace App\Http\Controllers\Jewelry;

use App\Http\Controllers\BaseController;
use App\Models\RfidTag;
use Illuminate\Http\Request;

/**
 * Generic CRUD for `rfid_tags` (SRS domain, database/jewelrydatabase.sql).
 * Access is gated by a single per-resource Permission (app/Policies/Jewelry).
 */
class RfidTagController extends BaseController
{
    public function index(Request $request)
    {
        $this->authorizeForUser(request()->user('api'), 'view', RfidTag::class);
        $perPage = (int) $request->input('limit', 15);
        $query = RfidTag::query();

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
        $this->authorizeForUser(request()->user('api'), 'create', RfidTag::class);
        $item = RfidTag::create($request->only((new RfidTag)->getFillable()));

        return $this->sendResponse($item, 'RfidTag created successfully.');
    }

    public function show($id)
    {
        $this->authorizeForUser(request()->user('api'), 'view', RfidTag::class);
        $item = RfidTag::findOrFail($id);

        return $this->sendResponse($item, 'RfidTag retrieved successfully.');
    }

    public function update(Request $request, $id)
    {
        $this->authorizeForUser(request()->user('api'), 'update', RfidTag::class);
        $item = RfidTag::findOrFail($id);
        $item->update($request->only($item->getFillable()));

        return $this->sendResponse($item, 'RfidTag updated successfully.');
    }

    public function destroy($id)
    {
        $this->authorizeForUser(request()->user('api'), 'delete', RfidTag::class);
        $item = RfidTag::findOrFail($id);
        $item->delete();

        return $this->sendResponse([], 'RfidTag deleted successfully.');
    }
}
