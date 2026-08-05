<?php

namespace App\Http\Controllers\Jewelry;

use App\Http\Controllers\BaseController;
use App\Models\Vault;
use Illuminate\Http\Request;

/**
 * Generic CRUD for `vaults` (SRS domain, database/jewelrydatabase.sql).
 * Access is gated by a single per-resource Permission (app/Policies/Jewelry).
 */
class VaultController extends BaseController
{
    public function index(Request $request)
    {
        $this->authorizeForUser(request()->user('api'), 'view', Vault::class);
        $perPage = (int) $request->input('limit', 15);
        $query = Vault::query();

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
        $this->authorizeForUser(request()->user('api'), 'create', Vault::class);
        $item = Vault::create($request->only((new Vault)->getFillable()));

        return $this->sendResponse($item, 'Vault created successfully.');
    }

    public function show($id)
    {
        $this->authorizeForUser(request()->user('api'), 'view', Vault::class);
        $item = Vault::findOrFail($id);

        return $this->sendResponse($item, 'Vault retrieved successfully.');
    }

    public function update(Request $request, $id)
    {
        $this->authorizeForUser(request()->user('api'), 'update', Vault::class);
        $item = Vault::findOrFail($id);
        $item->update($request->only($item->getFillable()));

        return $this->sendResponse($item, 'Vault updated successfully.');
    }

    public function destroy($id)
    {
        $this->authorizeForUser(request()->user('api'), 'delete', Vault::class);
        $item = Vault::findOrFail($id);
        $item->delete();

        return $this->sendResponse([], 'Vault deleted successfully.');
    }
}
