<?php

namespace App\Services\Jewelry;

use App\Models\Setting;
use App\Services\Jewelry\DiamondPriceProviders\DiamondPriceProviderInterface;
use App\Services\Jewelry\DiamondPriceProviders\HttpFeedDiamondProvider;
use Illuminate\Support\Facades\Cache;

/**
 * Resolves the tenant's configured diamond-price provider and fetches a
 * price matrix through it. Mirrors MetalPriceService's shape.
 */
class DiamondPriceService
{
    protected const PROVIDERS = [
        'http_feed' => HttpFeedDiamondProvider::class,
    ];

    public function getPriceMatrix(string $shape): array
    {
        [$providerKey, $feedUrl, $apiKey] = $this->resolveProviderConfig();

        $cacheKey = 'diamond_price_matrix:' . $providerKey . ':' . strtolower($shape);

        return Cache::remember(
            $cacheKey,
            900,
            fn () => $this->resolveProvider($providerKey, $feedUrl, $apiKey)->getPriceMatrix($shape)
        );
    }

    public static function availableProviders(): array
    {
        return array_keys(self::PROVIDERS);
    }

    protected function resolveProviderConfig(): array
    {
        $setting = Setting::whereNull('deleted_at')->first();

        $providerKey = $setting->diamond_price_provider ?? null;
        $providerKey = (is_string($providerKey) && array_key_exists($providerKey, self::PROVIDERS))
            ? $providerKey
            : 'http_feed';

        return [$providerKey, $setting->diamond_price_api_url ?? '', $setting->diamond_price_api_key ?? null];
    }

    protected function resolveProvider(string $providerKey, string $feedUrl, ?string $apiKey): DiamondPriceProviderInterface
    {
        $providerClass = self::PROVIDERS[$providerKey] ?? null;

        if ($providerClass === null) {
            throw new \RuntimeException("Unknown diamond price provider '{$providerKey}'.");
        }

        return new $providerClass($feedUrl, $apiKey);
    }
}
