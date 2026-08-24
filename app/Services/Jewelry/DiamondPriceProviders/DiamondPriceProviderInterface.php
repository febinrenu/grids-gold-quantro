<?php

namespace App\Services\Jewelry\DiamondPriceProviders;

/**
 * A live diamond price-matrix source. Mirrors MetalPriceProviderInterface's
 * adapter shape — add a new provider by implementing this interface and
 * registering it in DiamondPriceService::PROVIDERS.
 */
interface DiamondPriceProviderInterface
{
    /**
     * Full per-carat price matrix for one shape, in USD.
     *
     * @return array<int, array{color_grade:string, clarity_grade:string, carat_min:float, carat_max:float, price_per_carat:float}>
     * @throws \RuntimeException if the feed is unreachable or returns an unusable response.
     */
    public function getPriceMatrix(string $shape): array;
}
