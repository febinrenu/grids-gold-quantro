<?php

namespace App\Http\Controllers\Jewelry;

use App\Http\Controllers\BaseController;
use App\Models\ItemAttachment;
use Illuminate\Http\Request;

/**
 * Generic CRUD for `item_attachments` (SRS domain, database/jewelrydatabase.sql).
 * Access is gated by a single per-resource Permission (app/Policies/Jewelry).
 */
class ItemAttachmentController extends BaseController
{
    public function index(Request $request)
    {
        $this->authorizeForUser(request()->user('api'), 'view', ItemAttachment::class);
        $perPage = (int) $request->input('limit', 15);
        $query = ItemAttachment::query();

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
        $this->authorizeForUser(request()->user('api'), 'create', ItemAttachment::class);
        $item = ItemAttachment::create($request->only((new ItemAttachment)->getFillable()));

        return $this->sendResponse($item, 'ItemAttachment created successfully.');
    }

    public function show($id)
    {
        $this->authorizeForUser(request()->user('api'), 'view', ItemAttachment::class);
        $item = ItemAttachment::findOrFail($id);

        return $this->sendResponse($item, 'ItemAttachment retrieved successfully.');
    }

    public function update(Request $request, $id)
    {
        $this->authorizeForUser(request()->user('api'), 'update', ItemAttachment::class);
        $item = ItemAttachment::findOrFail($id);
        $item->update($request->only($item->getFillable()));

        return $this->sendResponse($item, 'ItemAttachment updated successfully.');
    }

    public function destroy($id)
    {
        $this->authorizeForUser(request()->user('api'), 'delete', ItemAttachment::class);
        $item = ItemAttachment::findOrFail($id);
        $item->delete();

        return $this->sendResponse([], 'ItemAttachment deleted successfully.');
    }
}
