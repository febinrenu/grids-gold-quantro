<?php

namespace Tests\Unit;

use App\Http\Controllers\SettingsController;
use App\Models\Setting;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Crypt;
use Tests\TestCase;

/**
 * SettingsController::metalPriceSettingsPayload() is protected and reached
 * through a large, auth-guarded update() action, so it's exercised directly
 * via reflection here rather than a full HTTP request — this is purely
 * about the encrypt-on-write / preserve-on-blank contract, which doesn't
 * need the rest of the controller.
 */
class MetalPriceSettingsPayloadTest extends TestCase
{
    use RefreshDatabase;

    protected function migrateFreshUsing(): array
    {
        return ['--path' => 'database/migrations/tenant'];
    }

    protected function callPayload(Request $request, Setting $setting): array
    {
        $method = new \ReflectionMethod(SettingsController::class, 'metalPriceSettingsPayload');
        $method->setAccessible(true);

        $bool = fn ($v) => ($v === '1' || $v === 'true' || $v === 1 || $v === true) ? 1 : 0;
        $sanitizeEnum = function ($value, array $allowed) {
            if ($value === null) {
                return null;
            }
            $normalized = trim((string) $value);
            if ($normalized === '' || strtolower($normalized) === 'null') {
                return null;
            }
            return in_array($normalized, $allowed, true) ? $normalized : null;
        };

        return $method->invoke(app(SettingsController::class), $request, $setting, $sanitizeEnum, $bool);
    }

    public function test_new_api_key_is_encrypted_before_it_reaches_the_update_array(): void
    {
        $setting = new Setting();
        $request = Request::create('/', 'PUT', [
            'metal_price_sync_enabled' => '1',
            'metal_price_provider' => 'goldapi',
            'metal_price_api_key' => 'plain-text-key',
        ]);

        $payload = $this->callPayload($request, $setting);

        $this->assertNotEquals('plain-text-key', $payload['metal_price_api_key']);
        $this->assertEquals('plain-text-key', Crypt::decryptString($payload['metal_price_api_key']));
    }

    public function test_blank_api_key_does_not_overwrite_the_saved_one(): void
    {
        $setting = new Setting();
        $request = Request::create('/', 'PUT', [
            'metal_price_sync_enabled' => '1',
            'metal_price_provider' => 'goldapi',
            'metal_price_api_key' => '',
        ]);

        $payload = $this->callPayload($request, $setting);

        $this->assertArrayNotHasKey('metal_price_api_key', $payload);
    }

    public function test_unknown_provider_falls_back_to_goldapi(): void
    {
        $setting = new Setting();
        $request = Request::create('/', 'PUT', [
            'metal_price_provider' => 'not-a-real-provider',
        ]);

        $payload = $this->callPayload($request, $setting);

        $this->assertEquals('goldapi', $payload['metal_price_provider']);
    }

    public function test_omitted_toggle_falls_back_to_existing_setting_value(): void
    {
        $setting = new Setting(['metal_price_sync_enabled' => true]);
        $request = Request::create('/', 'PUT', []);

        $payload = $this->callPayload($request, $setting);

        $this->assertEquals(1, $payload['metal_price_sync_enabled']);
    }
}
