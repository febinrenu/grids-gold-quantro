<?php

namespace App\Http\Controllers\Jewelry;

use App\Http\Controllers\BaseController;
use App\Models\QuotationItem;
use Illuminate\Http\Request;

/**
 * Generic CRUD for `quotation_items` (SRS domain, database/jewelrydatabase.sql).
 * Access is gated by a single per-resource Permission (app/Policies/Jewelry).
 */
class QuotationItemController extends BaseController
{
    public function index(Request $request)
    {
        $this->authorizeForUser(request()->user('api'), 'view', QuotationItem::class);
        $perPage = (int) $request->input('limit', 15);
        $query = QuotationItem::query();

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
        $this->authorizeForUser(request()->user('api'), 'create', QuotationItem::class);
        $item = QuotationItem::create($request->only((new QuotationItem)->getFillable()));

        return $this->sendResponse($item, 'QuotationItem created successfully.');
    }

    public function show($id)
    {
        $this->authorizeForUser(request()->user('api'), 'view', QuotationItem::class);
        $item = QuotationItem::findOrFail($id);

        return $this->sendResponse($item, 'QuotationItem retrieved successfully.');
    }

    public function update(Request $request, $id)
    {
        $this->authorizeForUser(request()->user('api'), 'update', QuotationItem::class);
        $item = QuotationItem::findOrFail($id);
        $item->update($request->only($item->getFillable()));

        return $this->sendResponse($item, 'QuotationItem updated successfully.');
    }

    public function destroy($id)
    {
        $this->authorizeForUser(request()->user('api'), 'delete', QuotationItem::class);
        $item = QuotationItem::findOrFail($id);
        $item->delete();

        return $this->sendResponse([], 'QuotationItem deleted successfully.');
    }
}
