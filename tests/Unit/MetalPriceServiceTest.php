<?php

namespace Tests\Unit;

use App\Models\Setting;
use App\Services\Jewelry\MetalPriceService;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Http;
use Tests\TestCase;

class MetalPriceServiceTest extends TestCase
{
    use RefreshDatabase;

    /**
     * The provider is resolved from the tenant's Setting row, so this needs
     * the tenant schema migrated (same reason GoldRateServiceTest does).
     */
    protected function migrateFreshUsing(): array
    {
        return [
            '--path' => 'database/migrations/tenant',
        ];
    }

    public function test_falls_back_to_env_key_when_tenant_has_not_configured_one(): void
    {
        config(['services.goldapi.key' => 'env-key']);

        Http::fake([
            'https://www.goldapi.io/api/XAU/USD' => Http::response(['price' => 2000.0], 200),
        ]);

        $service = new MetalPriceService();

        $this->assertSame(2000.0, $service->getSpotPricePerOunceUsd('GOLD'));

        Http::assertSent(function ($request) {
            return $request->url() === 'https://www.goldapi.io/api/XAU/USD'
                && $request->hasHeader('x-access-token', 'env-key');
        });
    }

    public function test_prefers_the_tenants_own_configured_key_over_env(): void
    {
        config(['services.goldapi.key' => 'env-key']);

        Setting::create(['email' => 'test@example.com', 'CompanyName' => 'Test Co', 'CompanyPhone' => '000', 'CompanyAdress' => 'Test', 'metal_price_provider' => 'goldapi', 'metal_price_api_key' => 'tenant-key']);

        Http::fake([
            'https://www.goldapi.io/api/XAU/USD' => Http::response(['price' => 2000.0], 200),
        ]);

        (new MetalPriceService())->getSpotPricePerOunceUsd('GOLD');

        Http::assertSent(fn ($request) => $request->hasHeader('x-access-token', 'tenant-key'));
    }

    public function test_unknown_configured_provider_falls_back_to_goldapi(): void
    {
        config(['services.goldapi.key' => 'env-key']);

        Setting::create(['email' => 'test@example.com', 'CompanyName' => 'Test Co', 'CompanyPhone' => '000', 'CompanyAdress' => 'Test', 'metal_price_provider' => 'some-future-provider', 'metal_price_api_key' => null]);

        Http::fake([
            'https://www.goldapi.io/api/XAU/USD' => Http::response(['price' => 2000.0], 200),
        ]);

        $this->assertSame(2000.0, (new MetalPriceService())->getSpotPricePerOunceUsd('GOLD'));
    }

    public function test_converts_ounce_price_to_per_gram(): void
    {
        config(['services.goldapi.key' => 'test-key']);

        Http::fake([
            'https://www.goldapi.io/api/XAG/USD' => Http::response(['price' => 31.1034768], 200),
        ]);

        $service = new MetalPriceService();

        // 1 troy oz worth of price, spread over 1 troy oz worth of grams == 1/gram.
        $this->assertEqualsWithDelta(1.0, $service->getSpotPricePerGramUsd('SILVER'), 0.0001);
    }

    public function test_caches_the_spot_price_and_does_not_refetch(): void
    {
        config(['services.goldapi.key' => 'test-key']);

        Http::fake([
            'https://www.goldapi.io/api/XAU/USD' => Http::response(['price' => 2000.0], 200),
        ]);

        $service = new MetalPriceService();

        $service->getSpotPricePerOunceUsd('GOLD');
        $service->getSpotPricePerOunceUsd('GOLD');

        Http::assertSentCount(1);
    }

    public function test_throws_when_api_key_is_missing(): void
    {
        config(['services.goldapi.key' => null]);

        $service = new MetalPriceService();

        $this->expectException(\RuntimeException::class);
        $service->getSpotPricePerOunceUsd('GOLD');
    }

    public function test_throws_for_unsupported_metal_code(): void
    {
        config(['services.goldapi.key' => 'test-key']);

        $service = new MetalPriceService();

        $this->expectException(\RuntimeException::class);
        $service->getSpotPricePerOunceUsd('COPPER');
    }

    public function test_throws_when_api_call_fails(): void
    {
        config(['services.goldapi.key' => 'test-key']);

        Http::fake([
            'https://www.goldapi.io/api/XAU/USD' => Http::response(['error' => 'bad request'], 400),
        ]);

        $service = new MetalPriceService();

        $this->expectException(\RuntimeException::class);
        $service->getSpotPricePerOunceUsd('GOLD');
    }
}
