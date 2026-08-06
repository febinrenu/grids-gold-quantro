<?php

namespace App\Http\Controllers\Jewelry;

use App\Http\Controllers\BaseController;
use App\Models\Certificate;
use Illuminate\Http\Request;

/**
 * Generic CRUD for `certificates` (SRS domain, database/jewelrydatabase.sql).
 * Access is gated by a single per-resource Permission (app/Policies/Jewelry).
 */
class CertificateController extends BaseController
{
    public function index(Request $request)
    {
        $this->authorizeForUser(request()->user('api'), 'view', Certificate::class);
        $perPage = (int) $request->input('limit', 15);
        $query = Certificate::query();

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
        $this->authorizeForUser(request()->user('api'), 'create', Certificate::class);
        $item = Certificate::create($request->only((new Certificate)->getFillable()));

        return $this->sendResponse($item, 'Certificate created successfully.');
    }

    public function show($id)
    {
        $this->authorizeForUser(request()->user('api'), 'view', Certificate::class);
        $item = Certificate::findOrFail($id);

        return $this->sendResponse($item, 'Certificate retrieved successfully.');
    }

    public function update(Request $request, $id)
    {
        $this->authorizeForUser(request()->user('api'), 'update', Certificate::class);
        $item = Certificate::findOrFail($id);
        $item->update($request->only($item->getFillable()));

        return $this->sendResponse($item, 'Certificate updated successfully.');
    }

    public function destroy($id)
    {
        $this->authorizeForUser(request()->user('api'), 'delete', Certificate::class);
        $item = Certificate::findOrFail($id);
        $item->delete();

        return $this->sendResponse([], 'Certificate deleted successfully.');
    }
}
