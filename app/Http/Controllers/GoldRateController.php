<?php

namespace App\Http\Controllers;

use App\Models\Currency;
use App\Models\GoldRate;
use App\Models\Karat;
use App\Models\MetalType;
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

        $dateRange = null;
        if ($request->filled('start_date') || $request->filled('end_date')) {
            $dateRange = [
                'start' => $request->input('start_date'),
                'end'   => $request->input('end_date'),
            ];
        }

        $history = $this->goldRateService->history(
            $request->filled('metal_type_id') ? (int) $request->input('metal_type_id') : null,
            $request->filled('karat_id') ? (int) $request->input('karat_id') : null,
            $request->filled('warehouse_id') ? (int) $request->input('warehouse_id') : null,
            $dateRange
        );

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
            'weight_uom'           => 'nullable|string|max:16',
        ]);

        $rate = $this->goldRateService->setRate(
            (int)$request->input('metal_type_id'),
            (int)$request->input('karat_id'),
            (float)$request->input('rate_per_weight_unit'),
            (int)$request->input('currency_id'),
            $request->input('warehouse_id') ? (int)$request->input('warehouse_id') : null,
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

        $rate = $this->goldRateService->getCurrentRate(
            (int)$request->input('metal_type_id'),
            (int)$request->input('karat_id'),
            $request->input('warehouse_id') ? (int)$request->input('warehouse_id') : null
        );

        return $this->sendResponse($rate, 'Current gold rate retrieved successfully');
    }

    /**
     * Return option lists required by the gold-rate management UI.
     */
    public function options(Request $request)
    {
        $this->authorizeForUser($request->user('api'), 'view', GoldRate::class);

        $user = auth()->user();
        if ($user && $user->is_all_warehouses) {
            $warehouses = Warehouse::whereNull('deleted_at')->orderBy('name')->get(['id', 'name']);
        } else {
            $warehouseIds = UserWarehouse::where('user_id', optional($user)->id)->pluck('warehouse_id')->toArray();
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
}
