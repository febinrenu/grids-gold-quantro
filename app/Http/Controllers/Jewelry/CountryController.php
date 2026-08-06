<?php

namespace App\Http\Controllers\Jewelry;

use App\Http\Controllers\BaseController;
use App\Models\Country;
use Illuminate\Http\Request;

/**
 * Generic CRUD for `countries` (SRS domain, database/jewelrydatabase.sql).
 * Access is gated by a single per-resource Permission (app/Policies/Jewelry).
 */
class CountryController extends BaseController
{
    public function index(Request $request)
    {
        $this->authorizeForUser(request()->user('api'), 'view', Country::class);
        $perPage = (int) $request->input('limit', 15);
        $query = Country::query();

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
        $this->authorizeForUser(request()->user('api'), 'create', Country::class);
        $item = Country::create($request->only((new Country)->getFillable()));

        return $this->sendResponse($item, 'Country created successfully.');
    }

    public function show($id)
    {
        $this->authorizeForUser(request()->user('api'), 'view', Country::class);
        $item = Country::findOrFail($id);

        return $this->sendResponse($item, 'Country retrieved successfully.');
    }

    public function update(Request $request, $id)
    {
        $this->authorizeForUser(request()->user('api'), 'update', Country::class);
        $item = Country::findOrFail($id);
        $item->update($request->only($item->getFillable()));

        return $this->sendResponse($item, 'Country updated successfully.');
    }

    public function destroy($id)
    {
        $this->authorizeForUser(request()->user('api'), 'delete', Country::class);
        $item = Country::findOrFail($id);
        $item->delete();

        return $this->sendResponse([], 'Country deleted successfully.');
    }
}
