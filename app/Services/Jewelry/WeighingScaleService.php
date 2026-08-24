<?php

namespace App\Services\Jewelry;

use App\Models\Setting;
use App\Services\Jewelry\WeighingScaleProviders\HttpBridgeScaleProvider;
use App\Services\Jewelry\WeighingScaleProviders\WeighingScaleProviderInterface;

/**
 * Resolves the tenant's configured weighing-scale provider (Settings →
 * Jewelry → Weighing Scale) and reads a live weight through it. Mirrors
 * MetalPriceService's provider-resolution shape.
 */
class WeighingScaleService
{
    protected const PROVIDERS = [
        'http_bridge' => HttpBridgeScaleProvider::class,
    ];

    public function isEnabled(): bool
    {
        $setting = Setting::whereNull('deleted_at')->first();

        return (bool) ($setting->scale_integration_enabled ?? false);
    }

    public function readWeightGrams(): float
    {
        $setting = Setting::whereNull('deleted_at')->first();

        $providerKey = $setting->scale_provider ?? null;
        $providerKey = (is_string($providerKey) && array_key_exists($providerKey, self::PROVIDERS))
            ? $providerKey
            : 'http_bridge';

        $provider = $this->resolveProvider($providerKey, $setting->scale_bridge_url ?? '', $setting->scale_api_key ?? null);

        return $provider->readWeightGrams();
    }

    public static function availableProviders(): array
    {
        return array_keys(self::PROVIDERS);
    }

    protected function resolveProvider(string $providerKey, string $bridgeUrl, ?string $apiKey): WeighingScaleProviderInterface
    {
        $providerClass = self::PROVIDERS[$providerKey] ?? null;

        if ($providerClass === null) {
            throw new \RuntimeException("Unknown weighing scale provider '{$providerKey}'.");
        }

        return new $providerClass($bridgeUrl, $apiKey);
    }
}
