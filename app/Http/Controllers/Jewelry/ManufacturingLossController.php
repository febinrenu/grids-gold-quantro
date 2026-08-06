<?php

namespace App\Http\Controllers\Jewelry;

use App\Http\Controllers\BaseController;
use App\Models\ManufacturingLoss;
use Illuminate\Http\Request;

/**
 * Generic CRUD for `manufacturing_losses` (SRS domain, database/jewelrydatabase.sql).
 * Access is gated by a single per-resource Permission (app/Policies/Jewelry).
 */
class ManufacturingLossController extends BaseController
{
    public function index(Request $request)
    {
        $this->authorizeForUser(request()->user('api'), 'view', ManufacturingLoss::class);
        $perPage = (int) $request->input('limit', 15);
        $query = ManufacturingLoss::query();

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
        $this->authorizeForUser(request()->user('api'), 'create', ManufacturingLoss::class);
        $item = ManufacturingLoss::create($request->only((new ManufacturingLoss)->getFillable()));

        return $this->sendResponse($item, 'ManufacturingLoss created successfully.');
    }

    public function show($id)
    {
        $this->authorizeForUser(request()->user('api'), 'view', ManufacturingLoss::class);
        $item = ManufacturingLoss::findOrFail($id);

        return $this->sendResponse($item, 'ManufacturingLoss retrieved successfully.');
    }

    public function update(Request $request, $id)
    {
        $this->authorizeForUser(request()->user('api'), 'update', ManufacturingLoss::class);
        $item = ManufacturingLoss::findOrFail($id);
        $item->update($request->only($item->getFillable()));

        return $this->sendResponse($item, 'ManufacturingLoss updated successfully.');
    }

    public function destroy($id)
    {
        $this->authorizeForUser(request()->user('api'), 'delete', ManufacturingLoss::class);
        $item = ManufacturingLoss::findOrFail($id);
        $item->delete();

        return $this->sendResponse([], 'ManufacturingLoss deleted successfully.');
    }
}
