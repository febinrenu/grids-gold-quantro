<?php

namespace App\Http\Controllers\Jewelry;

use App\Http\Controllers\BaseController;
use App\Models\KaratConversion;
use Illuminate\Http\Request;

/**
 * Generic CRUD for `karat_conversions` (SRS domain, database/jewelrydatabase.sql).
 * Access is gated by a single per-resource Permission (app/Policies/Jewelry).
 */
class KaratConversionController extends BaseController
{
    public function index(Request $request)
    {
        $this->authorizeForUser(request()->user('api'), 'view', KaratConversion::class);
        $perPage = (int) $request->input('limit', 15);
        $query = KaratConversion::query();

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
        $this->authorizeForUser(request()->user('api'), 'create', KaratConversion::class);
        $item = KaratConversion::create($request->only((new KaratConversion)->getFillable()));

        return $this->sendResponse($item, 'KaratConversion created successfully.');
    }

    public function show($id)
    {
        $this->authorizeForUser(request()->user('api'), 'view', KaratConversion::class);
        $item = KaratConversion::findOrFail($id);

        return $this->sendResponse($item, 'KaratConversion retrieved successfully.');
    }

    public function update(Request $request, $id)
    {
        $this->authorizeForUser(request()->user('api'), 'update', KaratConversion::class);
        $item = KaratConversion::findOrFail($id);
        $item->update($request->only($item->getFillable()));

        return $this->sendResponse($item, 'KaratConversion updated successfully.');
    }

    public function destroy($id)
    {
        $this->authorizeForUser(request()->user('api'), 'delete', KaratConversion::class);
        $item = KaratConversion::findOrFail($id);
        $item->delete();

        return $this->sendResponse([], 'KaratConversion deleted successfully.');
    }
}
