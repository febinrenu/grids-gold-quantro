<?php

namespace App\Http\Controllers\Jewelry;

use App\Http\Controllers\BaseController;
use App\Models\Attachment;
use Illuminate\Http\Request;

/**
 * Generic CRUD for `attachments` (SRS domain, database/jewelrydatabase.sql).
 * Access is gated by a single per-resource Permission (app/Policies/Jewelry).
 */
class AttachmentController extends BaseController
{
    public function index(Request $request)
    {
        $this->authorizeForUser(request()->user('api'), 'view', Attachment::class);
        $perPage = (int) $request->input('limit', 15);
        $query = Attachment::query();

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
        $this->authorizeForUser(request()->user('api'), 'create', Attachment::class);
        $item = Attachment::create($request->only((new Attachment)->getFillable()));

        return $this->sendResponse($item, 'Attachment created successfully.');
    }

    public function show($id)
    {
        $this->authorizeForUser(request()->user('api'), 'view', Attachment::class);
        $item = Attachment::findOrFail($id);

        return $this->sendResponse($item, 'Attachment retrieved successfully.');
    }

    public function update(Request $request, $id)
    {
        $this->authorizeForUser(request()->user('api'), 'update', Attachment::class);
        $item = Attachment::findOrFail($id);
        $item->update($request->only($item->getFillable()));

        return $this->sendResponse($item, 'Attachment updated successfully.');
    }

    public function destroy($id)
    {
        $this->authorizeForUser(request()->user('api'), 'delete', Attachment::class);
        $item = Attachment::findOrFail($id);
        $item->delete();

        return $this->sendResponse([], 'Attachment deleted successfully.');
    }
}
