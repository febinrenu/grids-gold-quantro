<?php

namespace App\Http\Controllers\Jewelry;

use App\Http\Controllers\BaseController;
use App\Models\DiamondPriceRate;
use App\Services\Jewelry\DiamondRateService;
use Illuminate\Http\Request;

class DiamondPriceRateController extends BaseController
{
    public function __construct(protected DiamondRateService $service)
    {
    }

    public function index(Request $request)
    {
        $this->authorizeForUser(request()->user('api'), 'view', DiamondPriceRate::class);
        $perPage = (int) $request->input('limit', 15);
        $query = DiamondPriceRate::query();

        if ($request->filled('shape')) {
            $query->where('shape', $request->input('shape'));
        }

        $total = $query->count();
        if ($perPage === -1) {
            $perPage = max($total, 1);
        }
        $page = (int) $request->input('page', 1);
        $items = $query->orderByDesc('effective_at')
            ->offset(max($page - 1, 0) * $perPage)
            ->limit($perPage)
            ->get();

        return response()->json(['data' => $items, 'totalRows' => $total]);
    }

    public function store(Request $request)
    {
        $this->authorizeForUser(request()->user('api'), 'create', DiamondPriceRate::class);
        $request->validate([
            'shape' => 'required|string|max:20',
            'color_grade' => 'required|string|max:5',
            'clarity_grade' => 'required|string|max:10',
            'carat_min' => 'required|numeric|min:0',
            'carat_max' => 'required|numeric|gt:carat_min',
            'price_per_carat' => 'required|numeric|min:0',
            'currency_id' => 'required|integer|exists:currencies,id',
        ]);

        $item = $this->service->setRate(
            $request->input('shape'),
            $request->input('color_grade'),
            $request->input('clarity_grade'),
            (float) $request->input('carat_min'),
            (float) $request->input('carat_max'),
            (float) $request->input('price_per_carat'),
            (int) $request->input('currency_id'),
            (int) optional(request()->user('api'))->id
        );

        return $this->sendResponse($item, 'Diamond price rate created successfully.');
    }

    public function show($id)
    {
        $this->authorizeForUser(request()->user('api'), 'view', DiamondPriceRate::class);
        $item = DiamondPriceRate::findOrFail($id);

        return $this->sendResponse($item, 'Diamond price rate retrieved successfully.');
    }

    /**
     * Live lookup: current active price for a shape/color/clarity/carat.
     */
    public function current(Request $request)
    {
        $this->authorizeForUser(request()->user('api'), 'view', DiamondPriceRate::class);
        $request->validate([
            'shape' => 'required|string',
            'color_grade' => 'required|string',
            'clarity_grade' => 'required|string',
            'carat' => 'required|numeric|min:0',
        ]);

        $rate = $this->service->getCurrentPrice(
            $request->input('shape'),
            $request->input('color_grade'),
            $request->input('clarity_grade'),
            (float) $request->input('carat')
        );

        if (! $rate) {
            return $this->sendError('No active price found for that combination.');
        }

        return $this->sendResponse($rate, 'Current diamond price rate retrieved successfully.');
    }

    public function destroy($id)
    {
        $this->authorizeForUser(request()->user('api'), 'delete', DiamondPriceRate::class);
        $item = DiamondPriceRate::findOrFail($id);
        $item->delete();

        return $this->sendResponse([], 'Diamond price rate deleted successfully.');
    }
}
