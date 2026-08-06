<?php

namespace App\Services\Jewelry;

use App\Models\Setting;
use App\Services\Jewelry\MetalPriceProviders\GoldApiProvider;
use App\Services\Jewelry\MetalPriceProviders\MetalPriceProviderInterface;
use Illuminate\Support\Facades\Cache;

/**
 * Resolves the tenant's configured metal-price provider (Settings → Jewelry)
 * and fetches live spot prices through it. Purity/karat math is deliberately
 * NOT delegated to the provider — it's computed locally from this app's own
 * Karat.purity_percentage, so one API call per metal covers every karat.
 *
 * To add a new provider: implement MetalPriceProviderInterface and register
 * it in PROVIDERS. Nothing else in the app needs to change.
 */
class MetalPriceService
{
    /**
     * Troy ounce in grams. Fixed physical constant.
     */
    public const GRAMS_PER_TROY_OUNCE = 31.1034768;

    /**
     * Setting.metal_price_provider value => provider class.
     */
    protected const PROVIDERS = [
        'goldapi' => GoldApiProvider::class,
    ];

    /**
     * Get the current spot price for one troy ounce of pure metal, in USD.
     *
     * Cached for 15 minutes per provider+metal to stay well within a free
     * API tier's quota even with several metals and tenants.
     */
    public function getSpotPricePerOunceUsd(string $metalCode): float
    {
        [$providerKey, $apiKey] = $this->resolveProviderConfig();

        $cacheKey = 'metal_spot_price_usd:' . $providerKey . ':' . strtoupper($metalCode);

        return Cache::remember(
            $cacheKey,
            900,
            fn () => $this->resolveProvider($providerKey, $apiKey)->getSpotPricePerOunceUsd($metalCode)
        );
    }

    /**
     * Get the current spot price per gram of pure (999/1000) metal, in USD.
     */
    public function getSpotPricePerGramUsd(string $metalCode): float
    {
        return $this->getSpotPricePerOunceUsd($metalCode) / self::GRAMS_PER_TROY_OUNCE;
    }

    /**
     * List of provider keys this app knows how to use, for populating the
     * Settings UI's provider dropdown.
     *
     * @return string[]
     */
    public static function availableProviders(): array
    {
        return array_keys(self::PROVIDERS);
    }

    /**
     * Resolve which provider + API key to use: the tenant's own Settings
     * value, falling back to .env (GOLDAPI_KEY) when the tenant hasn't
     * configured their own key yet — so existing .env-only setups keep
     * working after this feature ships.
     *
     * @return array{0: string, 1: ?string}
     */
    protected function resolveProviderConfig(): array
    {
        $setting = Setting::whereNull('deleted_at')->first();

        $providerKey = $setting->metal_price_provider ?? null;
        $providerKey = (is_string($providerKey) && array_key_exists($providerKey, self::PROVIDERS))
            ? $providerKey
            : 'goldapi';

        $apiKey = $setting->metal_price_api_key ?? null;

        if (empty($apiKey) && $providerKey === 'goldapi') {
            $apiKey = config('services.goldapi.key');
        }

        return [$providerKey, $apiKey];
    }

    protected function resolveProvider(string $providerKey, ?string $apiKey): MetalPriceProviderInterface
    {
        $providerClass = self::PROVIDERS[$providerKey] ?? null;

        if ($providerClass === null) {
            throw new \RuntimeException("Unknown metal price provider '{$providerKey}'.");
        }

        return new $providerClass((string) $apiKey);
    }
}
