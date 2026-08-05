<?php

namespace App\Http\Controllers\Jewelry;

use App\Http\Controllers\BaseController;
use App\Models\NotificationTemplate;
use Illuminate\Http\Request;

/**
 * Generic CRUD for `notification_templates` (SRS domain, database/jewelrydatabase.sql).
 * Access is gated by a single per-resource Permission (app/Policies/Jewelry).
 */
class NotificationTemplateController extends BaseController
{
    public function index(Request $request)
    {
        $this->authorizeForUser(request()->user('api'), 'view', NotificationTemplate::class);
        $perPage = (int) $request->input('limit', 15);
        $query = NotificationTemplate::query();

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
        $this->authorizeForUser(request()->user('api'), 'create', NotificationTemplate::class);
        $item = NotificationTemplate::create($request->only((new NotificationTemplate)->getFillable()));

        return $this->sendResponse($item, 'NotificationTemplate created successfully.');
    }

    public function show($id)
    {
        $this->authorizeForUser(request()->user('api'), 'view', NotificationTemplate::class);
        $item = NotificationTemplate::findOrFail($id);

        return $this->sendResponse($item, 'NotificationTemplate retrieved successfully.');
    }

    public function update(Request $request, $id)
    {
        $this->authorizeForUser(request()->user('api'), 'update', NotificationTemplate::class);
        $item = NotificationTemplate::findOrFail($id);
        $item->update($request->only($item->getFillable()));

        return $this->sendResponse($item, 'NotificationTemplate updated successfully.');
    }

    public function destroy($id)
    {
        $this->authorizeForUser(request()->user('api'), 'delete', NotificationTemplate::class);
        $item = NotificationTemplate::findOrFail($id);
        $item->delete();

        return $this->sendResponse([], 'NotificationTemplate deleted successfully.');
    }
}
