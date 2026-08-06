<?php

namespace App\Http\Controllers\Jewelry;

use App\Http\Controllers\BaseController;
use App\Models\RfidSessionItem;
use Illuminate\Http\Request;

/**
 * Generic CRUD for `rfid_session_items` (SRS domain, database/jewelrydatabase.sql).
 * Access is gated by a single per-resource Permission (app/Policies/Jewelry).
 */
class RfidSessionItemController extends BaseController
{
    public function index(Request $request)
    {
        $this->authorizeForUser(request()->user('api'), 'view', RfidSessionItem::class);
        $perPage = (int) $request->input('limit', 15);
        $query = RfidSessionItem::query();

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
        $this->authorizeForUser(request()->user('api'), 'create', RfidSessionItem::class);
        $item = RfidSessionItem::create($request->only((new RfidSessionItem)->getFillable()));

        return $this->sendResponse($item, 'RfidSessionItem created successfully.');
    }

    public function show($id)
    {
        $this->authorizeForUser(request()->user('api'), 'view', RfidSessionItem::class);
        $item = RfidSessionItem::findOrFail($id);

        return $this->sendResponse($item, 'RfidSessionItem retrieved successfully.');
    }

    public function update(Request $request, $id)
    {
        $this->authorizeForUser(request()->user('api'), 'update', RfidSessionItem::class);
        $item = RfidSessionItem::findOrFail($id);
        $item->update($request->only($item->getFillable()));

        return $this->sendResponse($item, 'RfidSessionItem updated successfully.');
    }

    public function destroy($id)
    {
        $this->authorizeForUser(request()->user('api'), 'delete', RfidSessionItem::class);
        $item = RfidSessionItem::findOrFail($id);
        $item->delete();

        return $this->sendResponse([], 'RfidSessionItem deleted successfully.');
    }
}
