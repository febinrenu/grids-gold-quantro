<?php

namespace App\Http\Controllers;

use App\Services\Jewelry\JewelryPricingService;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

class JewelryPricingController extends BaseController
{
    /**
     * The jewelry pricing service instance.
     *
     * @var JewelryPricingService
     */
    protected JewelryPricingService $pricingService;

    /**
     * Create a new controller instance.
     *
     * @param JewelryPricingService $pricingService
     */
    public function __construct(JewelryPricingService $pricingService)
    {
        $this->pricingService = $pricingService;
    }

    /**
     * Generate a transient pricing preview for a jewelry product.
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function preview(Request $request)
    {
        $request->validate([
            'product_id'   => 'required|integer|exists:products,id',
            'warehouse_id' => 'nullable|integer|exists:warehouses,id',
            'overrides'    => 'nullable|array',
        ]);

        $overrides = $request->input('overrides', []);
        if (! empty($overrides)) {
            $this->authorizeForUser($request->user('api'), 'override', [\App\Policies\JewelryPricingPolicy::class]);
        }

        try {
            $breakdown = $this->pricingService->preview(
                (int) $request->input('product_id'),
                $request->filled('warehouse_id') ? (int) $request->input('warehouse_id') : null,
                $overrides
            );
        } catch (\InvalidArgumentException $exception) {
            throw ValidationException::withMessages([
                'overrides.making_charge_formula' => ['Invalid formula.'],
            ]);
        }

        return $this->sendResponse($breakdown, 'Pricing preview generated successfully');
    }
}
