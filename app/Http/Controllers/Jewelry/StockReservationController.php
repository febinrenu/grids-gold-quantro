<?php

namespace App\Http\Controllers\Jewelry;

use App\Http\Controllers\BaseController;
use App\Models\StockReservation;
use Illuminate\Http\Request;

/**
 * Generic CRUD for `stock_reservations` (SRS domain, database/jewelrydatabase.sql).
 * Access is gated by a single per-resource Permission (app/Policies/Jewelry).
 */
class StockReservationController extends BaseController
{
    public function index(Request $request)
    {
        $this->authorizeForUser(request()->user('api'), 'view', StockReservation::class);
        $perPage = (int) $request->input('limit', 15);
        $query = StockReservation::query();

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
        $this->authorizeForUser(request()->user('api'), 'create', StockReservation::class);
        $item = StockReservation::create($request->only((new StockReservation)->getFillable()));

        return $this->sendResponse($item, 'StockReservation created successfully.');
    }

    public function show($id)
    {
        $this->authorizeForUser(request()->user('api'), 'view', StockReservation::class);
        $item = StockReservation::findOrFail($id);

        return $this->sendResponse($item, 'StockReservation retrieved successfully.');
    }

    public function update(Request $request, $id)
    {
        $this->authorizeForUser(request()->user('api'), 'update', StockReservation::class);
        $item = StockReservation::findOrFail($id);
        $item->update($request->only($item->getFillable()));

        return $this->sendResponse($item, 'StockReservation updated successfully.');
    }

    public function destroy($id)
    {
        $this->authorizeForUser(request()->user('api'), 'delete', StockReservation::class);
        $item = StockReservation::findOrFail($id);
        $item->delete();

        return $this->sendResponse([], 'StockReservation deleted successfully.');
    }
}
