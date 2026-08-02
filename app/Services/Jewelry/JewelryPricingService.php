<?php

namespace App\Services\Jewelry;

use App\Models\Product;
use App\Models\ItemStone;
use App\Services\Jewelry\GoldRateService;

class JewelryPricingService
{
    /**
     * The gold rate service instance.
     *
     * @var GoldRateService
     */
    protected GoldRateService $goldRateService;

    /**
     * Create a new service instance.
     *
     * @param GoldRateService $goldRateService
     */
    public function __construct(GoldRateService $goldRateService)
    {
        $this->goldRateService = $goldRateService;
    }

    /**
     * Preview the complete pricing breakdown for a product.
     *
     * @param int $productId
     * @param int|null $warehouseId
     * @param array $overrides
     * @return array
     */
    public function preview(
        int $productId,
        ?int $warehouseId,
        array $overrides = []
    ): array {
        $product = Product::findOrFail($productId);
        return $this->calculate($product, $warehouseId, $overrides);
    }

    /**
     * Calculate the final pricing details for a sale line item.
     * Must call the same calculation method as preview().
     *
     * @param int $productId
     * @param int|null $warehouseId
     * @param array $saleContext
     * @return array
     */
    public function priceForSale(
        int $productId,
        ?int $warehouseId,
        array $saleContext = []
    ): array {
        $product = Product::findOrFail($productId);
        return $this->calculate($product, $warehouseId, $saleContext);
    }

    /**
     * Perform the shared pricing calculation in the exact sequence specified by the design.
     *
     * @param Product $product
     * @param int|null $warehouseId
     * @param array $params
     * @return array
     */
    protected function calculate(Product $product, ?int $warehouseId, array $params = []): array
    {
        // 1. Resolve Metal weight and Gold rate (Metal Value)
        $metalWeight = (float)($params['metal_weight'] ?? $product->jewelry_metal_weight ?? 0.0);
        
        $goldRate = 0.0;
        $goldRateId = null;
        $goldRateEffectiveAt = null;

        if (isset($params['gold_rate'])) {
            $goldRate = (float)$params['gold_rate'];
            $goldRateId = $params['gold_rate_id'] ?? null;
            $goldRateEffectiveAt = $params['gold_rate_effective_at'] ?? null;
        } else {
            $rateRecord = $this->goldRateService->getCurrentRate(
                (int)$product->metal_type_id,
                (int)$product->karat_id,
                $warehouseId
            );

            if ($rateRecord) {
                $goldRate = (float)$rateRecord->rate_per_weight_unit;
                $goldRateId = $rateRecord->id;
                $goldRateEffectiveAt = $rateRecord->effective_at ? $rateRecord->effective_at->toDateTimeString() : null;
            }
        }

        $metalValue = round($metalWeight * $goldRate, 2);

        // 2. Compute Wastage Value
        $wastageType = $params['wastage_type'] ?? $product->wastage_type ?? '';
        $wastageValue = (float)($params['wastage_value'] ?? $product->wastage_value ?? 0.0);
        $wastageAmount = 0.0;

        if ($wastageType === 'percentage_of_value' || $wastageType === 'percentage') {
            $wastageAmount = $metalValue * ($wastageValue / 100.0);
        } elseif ($wastageType === 'percentage_of_weight') {
            $wastageAmount = ($metalWeight * ($wastageValue / 100.0)) * $goldRate;
        } elseif ($wastageType === 'fixed_value' || $wastageType === 'fixed') {
            $wastageAmount = $wastageValue;
        }
        $wastageAmount = round($wastageAmount, 2);

        // 3. Compute Making Charge
        $makingChargeType = $params['making_charge_type'] ?? $product->making_charge_type ?? '';
        $makingChargeValue = (float)($params['making_charge_value'] ?? $product->making_charge_value ?? 0.0);
        $makingChargeAmount = 0.0;

        if ($makingChargeType === 'fixed') {
            $makingChargeAmount = $makingChargeValue;
        } elseif ($makingChargeType === 'per_gram') {
            $grossWeight = (float)($params['gross_weight'] ?? $product->jewelry_gross_weight ?? 0.0);
            $makingChargeAmount = $makingChargeValue * $grossWeight;
        } elseif ($makingChargeType === 'percentage') {
            $makingChargeAmount = $metalValue * ($makingChargeValue / 100.0);
        } elseif ($makingChargeType === 'manual') {
            $makingChargeAmount = (float)($params['making_charge_amount'] ?? $makingChargeValue);
        } elseif ($makingChargeType === 'formula') {
            $formula = $params['making_charge_formula'] ?? $params['formula'] ?? '';
            $variables = [
                'gross_weight' => (float)($params['gross_weight'] ?? $product->jewelry_gross_weight ?? 0.0),
                'net_weight'   => (float)($params['net_weight'] ?? $product->jewelry_net_weight ?? 0.0),
                'metal_weight' => $metalWeight,
                'metal_value'  => $metalValue,
                'gold_rate'    => $goldRate,
            ];
            $makingChargeAmount = $this->evaluateFormula($formula, $variables);
        }
        $makingChargeAmount = round($makingChargeAmount, 2);

        // 4. Compute Stone Value
        if (isset($params['stone_value'])) {
            $stoneValue = (float)$params['stone_value'];
        } else {
            $stoneValue = (float)ItemStone::where('product_id', $product->id)->sum('total_cost_amount');
        }
        $stoneValue = round($stoneValue, 2);

        // 5. Compute Base Jewelry Value
        $labor = round((float)($params['labor'] ?? 0.0), 2);
        $additionalComponents = round((float)($params['additional_components'] ?? 0.0), 2);

        $baseJewelryValue = round(
            $metalValue + $wastageAmount + $makingChargeAmount + $stoneValue + $labor + $additionalComponents,
            2
        );

        // 6. Compute Selling Price (incorporating markup, discount, tax)
        $markup = round((float)($params['markup'] ?? 0.0), 2);
        $discount = round((float)($params['discount'] ?? 0.0), 2);

        $subtotal = round($baseJewelryValue + $markup - $discount, 2);

        if (isset($params['tax'])) {
            $tax = (float)$params['tax'];
        } else {
            $taxRate = (float)($params['tax_rate'] ?? 0.0);
            $tax = $subtotal * ($taxRate / 100.0);
        }
        $tax = round($tax, 2);

        $sellingPrice = round($subtotal + $tax, 2);

        return [
            'product_id'             => $product->id,
            'warehouse_id'           => $warehouseId,
            'gold_rate_id'           => $goldRateId,
            'gold_rate'              => $goldRate,
            'gold_rate_effective_at' => $goldRateEffectiveAt,
            'metal_weight'           => $metalWeight,
            'metal_value'            => $metalValue,
            'wastage_type'           => $wastageType,
            'wastage_value'          => $wastageValue,
            'wastage'                => $wastageAmount,
            'making_charge_type'     => $makingChargeType,
            'making_charge_value'    => $makingChargeValue,
            'making_charge'          => $makingChargeAmount,
            'stone_value'            => $stoneValue,
            'labor'                  => $labor,
            'additional_components'  => $additionalComponents,
            'markup'                 => $markup,
            'discount'               => $discount,
            'tax'                    => $tax,
            'base_value'             => $baseJewelryValue,
            'selling_price'          => $sellingPrice,
        ];
    }

    /**
     * Evaluates a mathematical formula safely using specific keys and numeric substitutions.
     *
     * @param string $formula
     * @param array $variables
     * @return float
     */
    protected function evaluateFormula(string $formula, array $variables): float
    {
        $expr = strtolower($formula);

        // Sort keys by length descending to prevent substring collisions (e.g., 'metal_weight' before 'weight')
        uksort($variables, function ($a, $b) {
            return strlen($b) - strlen($a);
        });

        foreach ($variables as $varName => $value) {
            $num = rtrim(rtrim(sprintf('%.15F', (float) $value), '0'), '.');
            $expr = str_replace(strtolower($varName), $num === '' ? '0' : $num, $expr);
        }

        // Clean expression to strictly contain numbers, arithmetic operators, parentheses, and whitespace
        $expr = preg_replace('/[^0-9\+\-\*\/\.\(\)\s]/', '', $expr);

        if (trim($expr) === '') {
            return 0.0;
        }

        try {
            $result = @eval("return {$expr};");
            return is_numeric($result) ? (float)$result : 0.0;
        } catch (\Throwable $e) {
            return 0.0;
        }
    }
}
