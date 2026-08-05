<?php

namespace App\Http\Controllers\Jewelry;

use App\Http\Controllers\BaseController;
use App\Models\TaxCode;
use Illuminate\Http\Request;

/**
 * Generic CRUD for `tax_codes` (SRS domain, database/jewelrydatabase.sql).
 * Access is gated by a single per-resource Permission (app/Policies/Jewelry).
 */
class TaxCodeController extends BaseController
{
    public function index(Request $request)
    {
        $this->authorizeForUser(request()->user('api'), 'view', TaxCode::class);
        $perPage = (int) $request->input('limit', 15);
        $query = TaxCode::query();

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
        $this->authorizeForUser(request()->user('api'), 'create', TaxCode::class);
        $item = TaxCode::create($request->only((new TaxCode)->getFillable()));

        return $this->sendResponse($item, 'TaxCode created successfully.');
    }

    public function show($id)
    {
        $this->authorizeForUser(request()->user('api'), 'view', TaxCode::class);
        $item = TaxCode::findOrFail($id);

        return $this->sendResponse($item, 'TaxCode retrieved successfully.');
    }

    public function update(Request $request, $id)
    {
        $this->authorizeForUser(request()->user('api'), 'update', TaxCode::class);
        $item = TaxCode::findOrFail($id);
        $item->update($request->only($item->getFillable()));

        return $this->sendResponse($item, 'TaxCode updated successfully.');
    }

    public function destroy($id)
    {
        $this->authorizeForUser(request()->user('api'), 'delete', TaxCode::class);
        $item = TaxCode::findOrFail($id);
        $item->delete();

        return $this->sendResponse([], 'TaxCode deleted successfully.');
    }
}
