<?php

namespace App\Services\Jewelry\MetalPriceProviders;

/**
 * A live precious-metal spot price source. Add a new provider by
 * implementing this interface and registering it in
 * MetalPriceService::PROVIDERS — no other code needs to change.
 */
interface MetalPriceProviderInterface
{
    /**
     * Spot price for one troy ounce of pure metal, in USD.
     *
     * @throws \RuntimeException if the metal is unsupported or the request fails.
     */
    public function getSpotPricePerOunceUsd(string $metalCode): float;
}
