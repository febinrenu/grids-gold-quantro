<?php

namespace App\Http\Controllers;

use App\Models\Currency;
use App\Models\GoldRate;
use App\Models\Karat;
use App\Models\MetalType;
use App\Models\User;
use App\Models\UserWarehouse;
use App\Models\Warehouse;
use App\Services\Jewelry\GoldRateService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Schema;

class GoldRateController extends BaseController
{
    /**
     * The gold rate service instance.
     *
     * @var GoldRateService
     */
    protected GoldRateService $goldRateService;

    /**
     * Create a new controller instance.
     *
     * @param GoldRateService $goldRateService
     */
    public function __construct(GoldRateService $goldRateService)
    {
        $this->goldRateService = $goldRateService;
    }

    /**
     * Retrieve the history of gold rates for a given metal and karat.
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function index(Request $request)
    {
        $this->authorizeForUser($request->user('api'), 'view', GoldRate::class);

        $request->validate([
            'metal_type_id' => 'nullable|integer|exists:metal_types,id',
            'karat_id'      => 'nullable|integer|exists:karats,id',
            'warehouse_id'  => 'nullable|integer|exists:warehouses,id',
            'start_date'    => 'nullable|date',
            'end_date'      => 'nullable|date',
        ]);

        $user = $request->user('api');
        $warehouseId = $request->filled('warehouse_id') ? (int) $request->input('warehouse_id') : null;
        $this->assertWarehouseAccess($user, $warehouseId);

        $dateRange = null;
        if ($request->filled('start_date') || $request->filled('end_date')) {
            $dateRange = [
                'start' => $request->filled('start_date') ? $request->input('start_date').' 00:00:00' : null,
                'end'   => $request->filled('end_date') ? $request->input('end_date').' 23:59:59' : null,
            ];
        }

        $history = $this->goldRateService->history(
            $request->filled('metal_type_id') ? (int) $request->input('metal_type_id') : null,
            $request->filled('karat_id') ? (int) $request->input('karat_id') : null,
            $warehouseId,
            $dateRange
        );

        if ($user && ! $user->is_all_warehouses) {
            $accessibleWarehouseIds = $this->getAccessibleWarehouseIds($user);
            $history = $history
                ->filter(function ($rate) use ($accessibleWarehouseIds) {
                    return $rate->warehouse_id === null
                        || in_array((int) $rate->warehouse_id, $accessibleWarehouseIds, true);
                })
                ->values();
        }

        return $this->sendResponse($history, 'Gold rate history retrieved successfully');
    }

    /**
     * Store a new gold rate record.
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        $this->authorizeForUser($request->user('api'), 'create', GoldRate::class);

        $request->validate([
            'metal_type_id'        => 'required|integer|exists:metal_types,id',
            'karat_id'             => 'required|integer|exists:karats,id',
            'rate_per_weight_unit' => 'required|numeric|min:0',
            'currency_id'          => 'required|integer|exists:currencies,id',
            'warehouse_id'         => 'nullable|integer|exists:warehouses,id',
            'weight_uom'           => 'nullable|string|in:g,mg,kg,ct,oz',
        ]);

        $warehouseId = $request->filled('warehouse_id') ? (int) $request->input('warehouse_id') : null;
        $this->assertWarehouseAccess($request->user('api'), $warehouseId);

        $rate = $this->goldRateService->setRate(
            (int)$request->input('metal_type_id'),
            (int)$request->input('karat_id'),
            (float)$request->input('rate_per_weight_unit'),
            (int)$request->input('currency_id'),
            $warehouseId,
            (int)$request->user('api')->id,
            (string) ($request->input('weight_uom') ?: 'g')
        );

        return $this->sendResponse($rate, 'Gold rate stored successfully');
    }

    /**
     * Fetch the currently active gold rate for a metal, karat, and optional warehouse.
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function current(Request $request)
    {
        $this->authorizeForUser($request->user('api'), 'view', GoldRate::class);

        $request->validate([
            'metal_type_id' => 'required|integer|exists:metal_types,id',
            'karat_id'      => 'required|integer|exists:karats,id',
            'warehouse_id'  => 'nullable|integer|exists:warehouses,id',
        ]);

        $warehouseId = $request->filled('warehouse_id') ? (int) $request->input('warehouse_id') : null;
        $this->assertWarehouseAccess($request->user('api'), $warehouseId);

        $rate = $this->goldRateService->getCurrentRate(
            (int)$request->input('metal_type_id'),
            (int)$request->input('karat_id'),
            $warehouseId
        );

        return $this->sendResponse($rate, 'Current gold rate retrieved successfully');
    }

    /**
     * Return option lists required by the gold-rate management UI.
     */
    public function options(Request $request)
    {
        $this->authorizeForUser($request->user('api'), 'view', GoldRate::class);

        $user = $request->user('api');
        if ($user && $user->is_all_warehouses) {
            $warehouses = Warehouse::whereNull('deleted_at')->orderBy('name')->get(['id', 'name']);
        } else {
            $warehouseIds = $this->getAccessibleWarehouseIds($user);
            $warehouses = Warehouse::whereNull('deleted_at')->whereIn('id', $warehouseIds)->orderBy('name')->get(['id', 'name']);
        }

        $metalTypes = Schema::hasTable('metal_types')
            ? MetalType::query()
                ->when(Schema::hasColumn('metal_types', 'is_active'), function ($query) {
                    $query->where('is_active', true);
                })
                ->orderBy('name')
                ->get(['id', 'name', 'code'])
            : collect();

        $karats = Schema::hasTable('karats')
            ? Karat::query()
                ->when(Schema::hasColumn('karats', 'is_active'), function ($query) {
                    $query->where('is_active', true);
                })
                ->orderBy('metal_type_id')
                ->orderByDesc('purity_percentage')
                ->orderBy('name')
                ->get(['id', 'metal_type_id', 'name', 'purity_percentage'])
            : collect();

        $currencies = Currency::whereNull('deleted_at')->orderBy('name')->get(['id', 'name', 'code', 'symbol']);

        return $this->sendResponse([
            'metal_types' => $metalTypes,
            'karats' => $karats,
            'warehouses' => $warehouses,
            'currencies' => $currencies,
        ], 'Gold rate options retrieved successfully');
    }

    protected function getAccessibleWarehouseIds(?User $user): array
    {
        if (! $user || $user->is_all_warehouses) {
            return [];
        }

        return UserWarehouse::where('user_id', $user->id)
            ->pluck('warehouse_id')
            ->map(function ($id) {
                return (int) $id;
            })
            ->values()
            ->all();
    }

    protected function assertWarehouseAccess(?User $user, ?int $warehouseId): void
    {
        if ($warehouseId === null || ! $user || $user->is_all_warehouses) {
            return;
        }

        if (! in_array($warehouseId, $this->getAccessibleWarehouseIds($user), true)) {
            abort(403, 'You are not authorized to access the selected warehouse gold rates.');
        }
    }
}
