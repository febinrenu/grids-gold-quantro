<?php

namespace App\Http\Controllers;

use App\Models\Permission;
use App\Models\UserWarehouse;
use App\Models\Warehouse;
use App\Models\WarehouseLocation;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class WarehouseLocationController extends BaseController
{
    /**
     * Whether the given user can view restricted (safe/vault) locations —
     * "unauthorized users cannot view safe, vault, or restricted-location
     * inventory" per the customization brief.
     */
    protected function canViewRestrictedLocations($user): bool
    {
        if (! $user) {
            return false;
        }

        $permission = Permission::where('name', 'view_restricted_locations')->first();

        return (bool) ($permission && $user->hasRole($permission->roles));
    }

    public function index(Request $request)
    {
        $this->authorizeForUser($request->user('api'), 'view', WarehouseLocation::class);

        $perPage = $request->integer('limit', 10);
        $pageStart = (int) ($request->get('page', 1));
        $offSet = ($pageStart * max($perPage, 1)) - max($perPage, 1);
        $order = $request->get('SortField', 'id');
        $dir = strtolower((string) $request->input('SortType')) === 'asc' ? 'asc' : 'desc';
        $search = $request->get('search', '');

        // Assigned warehouses (user scope)
        $user_auth = auth()->user();
        if ($user_auth->is_all_warehouses) {
            $allowedWarehouseIds = Warehouse::whereNull('deleted_at')->pluck('id')->toArray();
            $warehouses = Warehouse::whereNull('deleted_at')->get(['id', 'name']);
        } else {
            $allowedWarehouseIds = UserWarehouse::where('user_id', $user_auth->id)->pluck('warehouse_id')->toArray();
            $warehouses = Warehouse::whereNull('deleted_at')->whereIn('id', $allowedWarehouseIds)->get(['id', 'name']);
        }

        $warehouseId = $request->integer('warehouse_id');
        if ($warehouseId && ! in_array($warehouseId, $allowedWarehouseIds, true)) {
            $warehouseId = null;
        }

        $query = WarehouseLocation::query()
            ->whereNull('deleted_at')
            ->whereIn('warehouse_id', $allowedWarehouseIds);

        if (! $this->canViewRestrictedLocations($user_auth)) {
            $query->where('is_restricted', false);
        }

        if ($warehouseId) {
            $query->where('warehouse_id', $warehouseId);
        }

        if ($search !== '') {
            $query->where(function ($q) use ($search) {
                $q->where('code', 'LIKE', "%{$search}%")
                    ->orWhere('name', 'LIKE', "%{$search}%");
            });
        }

        $totalRows = (clone $query)->count();
        if ((string) $perPage === '-1') {
            $perPage = $totalRows;
            $offSet = 0;
        }

        $locations = $query
            ->with(['warehouse:id,name'])
            ->offset($offSet)
            ->limit($perPage)
            ->orderBy($order, $dir)
            ->get()
            ->map(function (WarehouseLocation $loc) {
                return [
                    'id' => $loc->id,
                    'warehouse_id' => $loc->warehouse_id,
                    'warehouse' => $loc->warehouse ? $loc->warehouse->name : null,
                    'code' => $loc->code,
                    'name' => $loc->name,
                    'is_active' => (bool) $loc->is_active,
                    'is_restricted' => (bool) $loc->is_restricted,
                ];
            });

        return response()->json([
            'locations' => $locations,
            'totalRows' => $totalRows,
            'warehouses' => $warehouses,
        ]);
    }

    public function store(Request $request)
    {
        $this->authorizeForUser($request->user('api'), 'create', WarehouseLocation::class);

        $allowedWarehouseIds = $this->allowedWarehouseIds();

        $request->validate([
            'warehouse_id' => ['required', 'integer', Rule::in($allowedWarehouseIds)],
            'code' => [
                'required',
                'string',
                'max:64',
                Rule::unique('warehouse_locations')->where(function ($q) use ($request) {
                    return $q->whereNull('deleted_at')
                        ->where('warehouse_id', $request->warehouse_id);
                }),
            ],
            'name' => ['nullable', 'string', 'max:192'],
            'is_active' => ['nullable', 'boolean'],
            'is_restricted' => ['nullable', 'boolean'],
        ]);

        $loc = WarehouseLocation::create([
            'warehouse_id' => $request->warehouse_id,
            'code' => trim($request->code),
            'name' => $request->name ? trim($request->name) : null,
            'is_active' => $request->has('is_active') ? (bool) $request->is_active : true,
            'is_restricted' => $request->has('is_restricted') ? (bool) $request->is_restricted : false,
        ]);

        return response()->json([
            'success' => true,
            'location' => $loc,
        ]);
    }

    public function update(Request $request, $id)
    {
        $this->authorizeForUser($request->user('api'), 'update', WarehouseLocation::class);

        $loc = WarehouseLocation::whereNull('deleted_at')->findOrFail($id);

        $allowedWarehouseIds = $this->allowedWarehouseIds();

        $request->validate([
            'warehouse_id' => ['required', 'integer', Rule::in($allowedWarehouseIds)],
            'code' => [
                'required',
                'string',
                'max:64',
                Rule::unique('warehouse_locations')->ignore($loc->id)->where(function ($q) use ($request) {
                    return $q->whereNull('deleted_at')
                        ->where('warehouse_id', $request->warehouse_id);
                }),
            ],
            'name' => ['nullable', 'string', 'max:192'],
            'is_active' => ['nullable', 'boolean'],
            'is_restricted' => ['nullable', 'boolean'],
        ]);

        $loc->warehouse_id = $request->warehouse_id;
        $loc->code = trim($request->code);
        $loc->name = $request->name ? trim($request->name) : null;
        $loc->is_active = $request->has('is_active') ? (bool) $request->is_active : (bool) $loc->is_active;
        $loc->is_restricted = $request->has('is_restricted') ? (bool) $request->is_restricted : (bool) $loc->is_restricted;
        $loc->save();

        return response()->json([
            'success' => true,
            'location' => $loc,
        ]);
    }

    public function destroy(Request $request, $id)
    {
        $this->authorizeForUser($request->user('api'), 'delete', WarehouseLocation::class);

        $loc = WarehouseLocation::whereNull('deleted_at')->findOrFail($id);
        $loc->deleted_at = Carbon::now();
        $loc->save();

        return response()->json(['success' => true]);
    }

    public function by_warehouse(Request $request, $warehouseId)
    {
        $this->authorizeForUser($request->user('api'), 'view', WarehouseLocation::class);

        $allowedWarehouseIds = $this->allowedWarehouseIds();
        if (! in_array((int) $warehouseId, $allowedWarehouseIds, true)) {
            return response()->json([]);
        }

        $query = WarehouseLocation::whereNull('deleted_at')
            ->where('warehouse_id', $warehouseId)
            ->where('is_active', 1);

        if (! $this->canViewRestrictedLocations($request->user('api'))) {
            $query->where('is_restricted', false);
        }

        $rows = $query->orderBy('code')->get(['id', 'warehouse_id', 'code', 'name', 'is_restricted']);

        return response()->json($rows);
    }

    private function allowedWarehouseIds(): array
    {
        $user_auth = auth()->user();
        if ($user_auth->is_all_warehouses) {
            return Warehouse::whereNull('deleted_at')->pluck('id')->toArray();
        }

        return UserWarehouse::where('user_id', $user_auth->id)->pluck('warehouse_id')->toArray();
    }
}

