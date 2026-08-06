<?php

namespace App\Http\Controllers\Jewelry;

use App\Http\Controllers\BaseController;
use App\Models\Reservation;
use Illuminate\Http\Request;

/**
 * Generic CRUD for `reservations` (SRS domain, database/jewelrydatabase.sql).
 * Access is gated by a single per-resource Permission (app/Policies/Jewelry).
 */
class ReservationController extends BaseController
{
    public function index(Request $request)
    {
        $this->authorizeForUser(request()->user('api'), 'view', Reservation::class);
        $perPage = (int) $request->input('limit', 15);
        $query = Reservation::query();

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
        $this->authorizeForUser(request()->user('api'), 'create', Reservation::class);
        $item = Reservation::create($request->only((new Reservation)->getFillable()));

        return $this->sendResponse($item, 'Reservation created successfully.');
    }

    public function show($id)
    {
        $this->authorizeForUser(request()->user('api'), 'view', Reservation::class);
        $item = Reservation::findOrFail($id);

        return $this->sendResponse($item, 'Reservation retrieved successfully.');
    }

    public function update(Request $request, $id)
    {
        $this->authorizeForUser(request()->user('api'), 'update', Reservation::class);
        $item = Reservation::findOrFail($id);
        $item->update($request->only($item->getFillable()));

        return $this->sendResponse($item, 'Reservation updated successfully.');
    }

    public function destroy($id)
    {
        $this->authorizeForUser(request()->user('api'), 'delete', Reservation::class);
        $item = Reservation::findOrFail($id);
        $item->delete();

        return $this->sendResponse([], 'Reservation deleted successfully.');
    }
}
