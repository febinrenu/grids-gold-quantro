<?php

namespace App\Services\Jewelry\WeighingScaleProviders;

/**
 * A live weight reading source. Add a new provider by implementing this
 * interface and registering it in WeighingScaleService::PROVIDERS — mirrors
 * the MetalPriceProviderInterface adapter pattern used for gold rates.
 */
interface WeighingScaleProviderInterface
{
    /**
     * Current stable reading from the connected scale, in grams.
     *
     * @throws \RuntimeException if the scale is unreachable or the reading is invalid.
     */
    public function readWeightGrams(): float;
}
