<?php

namespace App\Http\Controllers\Jewelry;

use App\Http\Controllers\BaseController;
use App\Models\GoldSavingScheme;
use Illuminate\Http\Request;

/**
 * ST-1 gap: gold savings/deposit schemes. Generic CRUD (see RfidTagController
 * for the established pattern) plus a maturity-status transition action.
 */
class GoldSavingSchemeController extends BaseController
{
    public function index(Request $request)
    {
        $this->authorizeForUser(request()->user('api'), 'view', GoldSavingScheme::class);
        $perPage = (int) $request->input('limit', 15);
        $query = GoldSavingScheme::query()->with('client');

        if ($request->filled('client_id')) {
            $query->where('client_id', $request->input('client_id'));
        }
        if ($request->filled('status')) {
            $query->where('status', $request->input('status'));
        }

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
        $this->authorizeForUser(request()->user('api'), 'create', GoldSavingScheme::class);
        $request->validate([
            'client_id' => 'required|integer|exists:clients,id',
            'scheme_name' => 'required|string|max:100',
            'duration_months' => 'required|integer|min:1',
            'start_date' => 'required|date',
        ]);

        $item = GoldSavingScheme::create($request->only((new GoldSavingScheme)->getFillable()));

        return $this->sendResponse($item, 'Gold saving scheme created successfully.');
    }

    public function show($id)
    {
        $this->authorizeForUser(request()->user('api'), 'view', GoldSavingScheme::class);
        $item = GoldSavingScheme::with(['client', 'deposits'])->findOrFail($id);

        return $this->sendResponse($item, 'Gold saving scheme retrieved successfully.');
    }

    public function update(Request $request, $id)
    {
        $this->authorizeForUser(request()->user('api'), 'update', GoldSavingScheme::class);
        $item = GoldSavingScheme::findOrFail($id);
        $item->update($request->only($item->getFillable()));

        return $this->sendResponse($item, 'Gold saving scheme updated successfully.');
    }

    public function destroy($id)
    {
        $this->authorizeForUser(request()->user('api'), 'delete', GoldSavingScheme::class);
        $item = GoldSavingScheme::findOrFail($id);
        $item->delete();

        return $this->sendResponse([], 'Gold saving scheme deleted successfully.');
    }
}
