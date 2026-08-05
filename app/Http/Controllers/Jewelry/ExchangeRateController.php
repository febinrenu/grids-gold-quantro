<?php

namespace App\Http\Controllers\Jewelry;

use App\Http\Controllers\BaseController;
use App\Models\ExchangeRate;
use Illuminate\Http\Request;

/**
 * Generic CRUD for `exchange_rates` (SRS domain, database/jewelrydatabase.sql).
 * Access is gated by a single per-resource Permission (app/Policies/Jewelry).
 */
class ExchangeRateController extends BaseController
{
    public function index(Request $request)
    {
        $this->authorizeForUser(request()->user('api'), 'view', ExchangeRate::class);
        $perPage = (int) $request->input('limit', 15);
        $query = ExchangeRate::query();

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
        $this->authorizeForUser(request()->user('api'), 'create', ExchangeRate::class);
        $item = ExchangeRate::create($request->only((new ExchangeRate)->getFillable()));

        return $this->sendResponse($item, 'ExchangeRate created successfully.');
    }

    public function show($id)
    {
        $this->authorizeForUser(request()->user('api'), 'view', ExchangeRate::class);
        $item = ExchangeRate::findOrFail($id);

        return $this->sendResponse($item, 'ExchangeRate retrieved successfully.');
    }

    public function update(Request $request, $id)
    {
        $this->authorizeForUser(request()->user('api'), 'update', ExchangeRate::class);
        $item = ExchangeRate::findOrFail($id);
        $item->update($request->only($item->getFillable()));

        return $this->sendResponse($item, 'ExchangeRate updated successfully.');
    }

    public function destroy($id)
    {
        $this->authorizeForUser(request()->user('api'), 'delete', ExchangeRate::class);
        $item = ExchangeRate::findOrFail($id);
        $item->delete();

        return $this->sendResponse([], 'ExchangeRate deleted successfully.');
    }
}
