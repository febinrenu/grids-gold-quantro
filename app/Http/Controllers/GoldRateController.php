<?php

namespace App\Http\Controllers;

use App\Models\GoldRate;
use App\Services\Jewelry\GoldRateService;
use Illuminate\Http\Request;

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
            'metal_type_id' => 'required|integer|exists:metal_types,id',
            'karat_id'      => 'required|integer|exists:karats,id',
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
            (int)$request->input('metal_type_id'),
            (int)$request->input('karat_id'),
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
        ]);

        $rate = $this->goldRateService->setRate(
            (int)$request->input('metal_type_id'),
            (int)$request->input('karat_id'),
            (float)$request->input('rate_per_weight_unit'),
            (int)$request->input('currency_id'),
            $request->input('warehouse_id') ? (int)$request->input('warehouse_id') : null,
            (int)$request->user('api')->id
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
}
