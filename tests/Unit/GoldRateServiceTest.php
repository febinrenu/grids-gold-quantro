<?php

namespace Tests\Unit;

use Tests\TestCase;
use App\Models\Currency;
use App\Models\GoldRate;
use App\Models\Karat;
use App\Models\MetalType;
use App\Services\Jewelry\GoldRateService;
use App\Services\Jewelry\MetalPriceService;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Http;
use Carbon\Carbon;

class GoldRateServiceTest extends TestCase
{
    use RefreshDatabase;

    private GoldRateService $service;

    /**
     * Override RefreshDatabase parameters to run tenant migrations.
     * This is required because this project places tenant-specific tables
     * (such as 'gold_rates') in a dedicated path: database/migrations/tenant.
     */
    protected function migrateFreshUsing(): array
    {
        return [
            '--path' => 'database/migrations/tenant',
        ];
    }

    protected function setUp(): void
    {
        parent::setUp();

        $this->service = new GoldRateService();
    }

    /**
     * Test 1: Newest rate wins.
     */
    public function test_newest_rate_wins(): void
    {
        $metalTypeId = 1;
        $karatId = 1;
        $currencyId = 1;
        $userId = 1;

        // Create an older active rate (1 hour ago)
        GoldRate::create([
            'metal_type_id'        => $metalTypeId,
            'karat_id'             => $karatId,
            'rate_per_weight_unit' => 50.00,
            'currency_id'          => $currencyId,
            'warehouse_id'         => null,
            'created_by'           => $userId,
            'effective_at'         => Carbon::now()->subHour(),
            'status'               => 'active',
            'rate_source'          => 'manual',
            'weight_uom'           => 'g',
        ]);

        // Create a newer active rate (now)
        $newRate = GoldRate::create([
            'metal_type_id'        => $metalTypeId,
            'karat_id'             => $karatId,
            'rate_per_weight_unit' => 55.00,
            'currency_id'          => $currencyId,
            'warehouse_id'         => null,
            'created_by'           => $userId,
            'effective_at'         => Carbon::now(),
            'status'               => 'active',
            'rate_source'          => 'manual',
            'weight_uom'           => 'g',
        ]);

        // Fetch current rate
        $current = $this->service->getCurrentRate($metalTypeId, $karatId);

        $this->assertNotNull($current);
        $this->assertEquals($newRate->id, $current->id);
        $this->assertEquals(55.00, $current->rate_per_weight_unit);
    }

    /**
     * Test 2: Warehouse-specific rate overrides company-wide rate.
     */
    public function test_warehouse_specific_rate_overrides_company_wide_rate(): void
    {
        $metalTypeId = 1;
        $karatId = 1;
        $currencyId = 1;
        $userId = 1;
        $warehouseId = 5;

        // Create a company-wide active rate
        GoldRate::create([
            'metal_type_id'        => $metalTypeId,
            'karat_id'             => $karatId,
            'rate_per_weight_unit' => 60.00,
            'currency_id'          => $currencyId,
            'warehouse_id'         => null,
            'created_by'           => $userId,
            'effective_at'         => Carbon::now(),
            'status'               => 'active',
            'rate_source'          => 'manual',
            'weight_uom'           => 'g',
        ]);

        // Create an active warehouse-specific rate.
        $warehouseRate = GoldRate::create([
            'metal_type_id'        => $metalTypeId,
            'karat_id'             => $karatId,
            'rate_per_weight_unit' => 65.00,
            'currency_id'          => $currencyId,
            'warehouse_id'         => $warehouseId,
            'created_by'           => $userId,
            'effective_at'         => Carbon::now()->subMinutes(10),
            'status'               => 'active',
            'rate_source'          => 'manual',
            'weight_uom'           => 'g',
        ]);

        // Fetch current rate for warehouse 5
        $current = $this->service->getCurrentRate($metalTypeId, $karatId, $warehouseId);

        $this->assertNotNull($current);
        $this->assertEquals($warehouseRate->id, $current->id);
        $this->assertEquals(65.00, $current->rate_per_weight_unit);
    }

    /**
     * Test 3: Company-wide rate is returned when warehouse-specific does not exist.
     */
    public function test_company_wide_rate_is_returned_when_warehouse_specific_does_not_exist(): void
    {
        $metalTypeId = 1;
        $karatId = 1;
        $currencyId = 1;
        $userId = 1;
        $warehouseId = 5;

        // Create a company-wide active rate
        $companyRate = GoldRate::create([
            'metal_type_id'        => $metalTypeId,
            'karat_id'             => $karatId,
            'rate_per_weight_unit' => 70.00,
            'currency_id'          => $currencyId,
            'warehouse_id'         => null,
            'created_by'           => $userId,
            'effective_at'         => Carbon::now(),
            'status'               => 'active',
            'rate_source'          => 'manual',
            'weight_uom'           => 'g',
        ]);

        // Fetch current rate for warehouse 5 (no rate exists for warehouse 5)
        $current = $this->service->getCurrentRate($metalTypeId, $karatId, $warehouseId);

        $this->assertNotNull($current);
        $this->assertEquals($companyRate->id, $current->id);
        $this->assertEquals(70.00, $current->rate_per_weight_unit);
    }

    /**
     * Test 4: Inactive rates are ignored.
     */
    public function test_inactive_rates_are_ignored(): void
    {
        $metalTypeId = 1;
        $karatId = 1;
        $currencyId = 1;
        $userId = 1;

        // Create an active rate (older)
        $activeRate = GoldRate::create([
            'metal_type_id'        => $metalTypeId,
            'karat_id'             => $karatId,
            'rate_per_weight_unit' => 50.00,
            'currency_id'          => $currencyId,
            'warehouse_id'         => null,
            'created_by'           => $userId,
            'effective_at'         => Carbon::now()->subHour(),
            'status'               => 'active',
            'rate_source'          => 'manual',
            'weight_uom'           => 'g',
        ]);

        // Create an inactive rate (newer)
        GoldRate::create([
            'metal_type_id'        => $metalTypeId,
            'karat_id'             => $karatId,
            'rate_per_weight_unit' => 60.00,
            'currency_id'          => $currencyId,
            'warehouse_id'         => null,
            'created_by'           => $userId,
            'effective_at'         => Carbon::now(),
            'status'               => 'inactive',
            'rate_source'          => 'manual',
            'weight_uom'           => 'g',
        ]);

        // Fetch current rate
        $current = $this->service->getCurrentRate($metalTypeId, $karatId);

        $this->assertNotNull($current);
        $this->assertEquals($activeRate->id, $current->id);
        $this->assertEquals(50.00, $current->rate_per_weight_unit);
    }

    /**
     * Test 5: Expired rates are ignored.
     */
    public function test_expired_rates_are_ignored(): void
    {
        $metalTypeId = 1;
        $karatId = 1;
        $currencyId = 1;
        $userId = 1;

        // Create an active rate but expired in the past
        GoldRate::create([
            'metal_type_id'        => $metalTypeId,
            'karat_id'             => $karatId,
            'rate_per_weight_unit' => 60.00,
            'currency_id'          => $currencyId,
            'warehouse_id'         => null,
            'created_by'           => $userId,
            'effective_at'         => Carbon::now()->subHours(2),
            'expires_at'           => Carbon::now()->subHour(),
            'status'               => 'active',
            'rate_source'          => 'manual',
            'weight_uom'           => 'g',
        ]);

        // Create a non-expired active rate (older)
        $nonExpiredRate = GoldRate::create([
            'metal_type_id'        => $metalTypeId,
            'karat_id'             => $karatId,
            'rate_per_weight_unit' => 50.00,
            'currency_id'          => $currencyId,
            'warehouse_id'         => null,
            'created_by'           => $userId,
            'effective_at'         => Carbon::now()->subHours(3),
            'expires_at'           => null,
            'status'               => 'active',
            'rate_source'          => 'manual',
            'weight_uom'           => 'g',
        ]);

        // Fetch current rate
        $current = $this->service->getCurrentRate($metalTypeId, $karatId);

        $this->assertNotNull($current);
        $this->assertEquals($nonExpiredRate->id, $current->id);
        $this->assertEquals(50.00, $current->rate_per_weight_unit);
    }

    /**
     * Test 6: Future effective_at rates are ignored.
     */
    public function test_future_effective_rates_are_ignored(): void
    {
        $metalTypeId = 1;
        $karatId = 1;
        $currencyId = 1;
        $userId = 1;

        // Create a future effective rate
        GoldRate::create([
            'metal_type_id'        => $metalTypeId,
            'karat_id'             => $karatId,
            'rate_per_weight_unit' => 70.00,
            'currency_id'          => $currencyId,
            'warehouse_id'         => null,
            'created_by'           => $userId,
            'effective_at'         => Carbon::now()->addHour(),
            'status'               => 'active',
            'rate_source'          => 'manual',
            'weight_uom'           => 'g',
        ]);

        // Create a past active rate
        $pastRate = GoldRate::create([
            'metal_type_id'        => $metalTypeId,
            'karat_id'             => $karatId,
            'rate_per_weight_unit' => 50.00,
            'currency_id'          => $currencyId,
            'warehouse_id'         => null,
            'created_by'           => $userId,
            'effective_at'         => Carbon::now()->subHour(),
            'status'               => 'active',
            'rate_source'          => 'manual',
            'weight_uom'           => 'g',
        ]);

        // Fetch current rate
        $current = $this->service->getCurrentRate($metalTypeId, $karatId);

        $this->assertNotNull($current);
        $this->assertEquals($pastRate->id, $current->id);
        $this->assertEquals(50.00, $current->rate_per_weight_unit);
    }

    /**
     * Test 7: setRate method always creates a new record.
     */
    public function test_set_rate_creates_new_record(): void
    {
        $metalTypeId = 1;
        $karatId = 1;
        $currencyId = 1;
        $userId = 1;
        $warehouseId = null;

        $rate1 = $this->service->setRate($metalTypeId, $karatId, 75.00, $currencyId, $warehouseId, $userId);
        $rate2 = $this->service->setRate($metalTypeId, $karatId, 80.00, $currencyId, $warehouseId, $userId);

        $this->assertNotEquals($rate1->id, $rate2->id);
        $this->assertCount(2, GoldRate::all());
    }

    /**
     * Test 8: history method returns correct records and supports date filters.
     */
    public function test_history_returns_ordered_records_and_filters_dates(): void
    {
        $metalTypeId = 1;
        $karatId = 1;
        $currencyId = 1;
        $userId = 1;

        // Create rate 2 hours ago
        $rate1 = GoldRate::create([
            'metal_type_id'        => $metalTypeId,
            'karat_id'             => $karatId,
            'rate_per_weight_unit' => 50.00,
            'currency_id'          => $currencyId,
            'warehouse_id'         => null,
            'created_by'           => $userId,
            'effective_at'         => Carbon::now()->subHours(2),
            'status'               => 'active',
            'rate_source'          => 'manual',
            'weight_uom'           => 'g',
        ]);

        // Create rate 1 hour ago
        $rate2 = GoldRate::create([
            'metal_type_id'        => $metalTypeId,
            'karat_id'             => $karatId,
            'rate_per_weight_unit' => 55.00,
            'currency_id'          => $currencyId,
            'warehouse_id'         => null,
            'created_by'           => $userId,
            'effective_at'         => Carbon::now()->subHour(),
            'status'               => 'active',
            'rate_source'          => 'manual',
            'weight_uom'           => 'g',
        ]);

        // Fetch history
        $history = $this->service->history($metalTypeId, $karatId);

        $this->assertCount(2, $history);
        $this->assertEquals($rate2->id, $history->first()->id); // Newest first

        // Test date filtering
        $start = Carbon::now()->subHours(3);
        $end = Carbon::now()->subHour()->subMinutes(30);

        $filteredHistory = $this->service->history($metalTypeId, $karatId, [$start, $end]);
        $this->assertCount(1, $filteredHistory);
        $this->assertEquals($rate1->id, $filteredHistory->first()->id);
    }

    public function test_history_supports_warehouse_filter_without_breaking_legacy_date_range_calls(): void
    {
        $metalTypeId = 1;
        $karatId = 1;
        $currencyId = 1;
        $userId = 1;
        $warehouseId = 5;

        $companyRate = GoldRate::create([
            'metal_type_id'        => $metalTypeId,
            'karat_id'             => $karatId,
            'rate_per_weight_unit' => 50.00,
            'currency_id'          => $currencyId,
            'warehouse_id'         => null,
            'created_by'           => $userId,
            'effective_at'         => Carbon::now()->subHours(2),
            'status'               => 'active',
            'rate_source'          => 'manual',
            'weight_uom'           => 'g',
        ]);

        $warehouseRate = GoldRate::create([
            'metal_type_id'        => $metalTypeId,
            'karat_id'             => $karatId,
            'rate_per_weight_unit' => 60.00,
            'currency_id'          => $currencyId,
            'warehouse_id'         => $warehouseId,
            'created_by'           => $userId,
            'effective_at'         => Carbon::now()->subHour(),
            'status'               => 'active',
            'rate_source'          => 'manual',
            'weight_uom'           => 'g',
        ]);

        $legacyRangeHistory = $this->service->history($metalTypeId, $karatId, [
            'start' => Carbon::now()->subHours(3),
            'end' => Carbon::now()->addMinute(),
        ]);
        $this->assertCount(2, $legacyRangeHistory);

        $warehouseHistory = $this->service->history($metalTypeId, $karatId, $warehouseId);
        $this->assertCount(1, $warehouseHistory);
        $this->assertEquals($warehouseRate->id, $warehouseHistory->first()->id);
        $this->assertNotEquals($companyRate->id, $warehouseHistory->first()->id);
    }

    /**
     * Test 9: Inactive warehouse-specific rate falls back to active company-wide rate.
     */
    public function test_inactive_warehouse_rate_falls_back_to_active_company_wide_rate(): void
    {
        $metalTypeId = 1;
        $karatId = 1;
        $currencyId = 1;
        $userId = 1;
        $warehouseId = 5;

        // Create an active company-wide rate (older, rate = 50)
        $companyRate = GoldRate::create([
            'metal_type_id'        => $metalTypeId,
            'karat_id'             => $karatId,
            'rate_per_weight_unit' => 50.00,
            'currency_id'          => $currencyId,
            'warehouse_id'         => null,
            'created_by'           => $userId,
            'effective_at'         => Carbon::now()->subHour(),
            'status'               => 'active',
            'rate_source'          => 'manual',
            'weight_uom'           => 'g',
        ]);

        // Create an inactive warehouse rate (newer, rate = 60)
        GoldRate::create([
            'metal_type_id'        => $metalTypeId,
            'karat_id'             => $karatId,
            'rate_per_weight_unit' => 60.00,
            'currency_id'          => $currencyId,
            'warehouse_id'         => $warehouseId,
            'created_by'           => $userId,
            'effective_at'         => Carbon::now(),
            'status'               => 'inactive',
            'rate_source'          => 'manual',
            'weight_uom'           => 'g',
        ]);

        $current = $this->service->getCurrentRate($metalTypeId, $karatId, $warehouseId);

        $this->assertNotNull($current);
        $this->assertEquals($companyRate->id, $current->id);
        $this->assertEquals(50.00, $current->rate_per_weight_unit);
    }

    /**
     * Test 10: Returns null when all rates are inactive.
     */
    public function test_returns_null_when_all_rates_are_inactive(): void
    {
        $metalTypeId = 1;
        $karatId = 1;
        $currencyId = 1;
        $userId = 1;

        GoldRate::create([
            'metal_type_id'        => $metalTypeId,
            'karat_id'             => $karatId,
            'rate_per_weight_unit' => 50.00,
            'currency_id'          => $currencyId,
            'warehouse_id'         => null,
            'created_by'           => $userId,
            'effective_at'         => Carbon::now(),
            'status'               => 'inactive',
            'rate_source'          => 'manual',
            'weight_uom'           => 'g',
        ]);

        $current = $this->service->getCurrentRate($metalTypeId, $karatId);
        $this->assertNull($current);
    }

    /**
     * Test 11: Expired warehouse-specific rate falls back to active company-wide rate.
     */
    public function test_expired_warehouse_rate_falls_back_to_active_company_wide_rate(): void
    {
        $metalTypeId = 1;
        $karatId = 1;
        $currencyId = 1;
        $userId = 1;
        $warehouseId = 5;

        // Create an active company-wide rate (older, rate = 50)
        $companyRate = GoldRate::create([
            'metal_type_id'        => $metalTypeId,
            'karat_id'             => $karatId,
            'rate_per_weight_unit' => 50.00,
            'currency_id'          => $currencyId,
            'warehouse_id'         => null,
            'created_by'           => $userId,
            'effective_at'         => Carbon::now()->subHours(2),
            'status'               => 'active',
            'rate_source'          => 'manual',
            'weight_uom'           => 'g',
        ]);

        // Create an expired warehouse rate (newer, rate = 60)
        GoldRate::create([
            'metal_type_id'        => $metalTypeId,
            'karat_id'             => $karatId,
            'rate_per_weight_unit' => 60.00,
            'currency_id'          => $currencyId,
            'warehouse_id'         => $warehouseId,
            'created_by'           => $userId,
            'effective_at'         => Carbon::now()->subHour(),
            'expires_at'           => Carbon::now()->subMinutes(10),
            'status'               => 'active',
            'rate_source'          => 'manual',
            'weight_uom'           => 'g',
        ]);

        $current = $this->service->getCurrentRate($metalTypeId, $karatId, $warehouseId);

        $this->assertNotNull($current);
        $this->assertEquals($companyRate->id, $current->id);
        $this->assertEquals(50.00, $current->rate_per_weight_unit);
    }

    /**
     * Test 12: Returns null when all rates are expired.
     */
    public function test_returns_null_when_all_rates_are_expired(): void
    {
        $metalTypeId = 1;
        $karatId = 1;
        $currencyId = 1;
        $userId = 1;

        GoldRate::create([
            'metal_type_id'        => $metalTypeId,
            'karat_id'             => $karatId,
            'rate_per_weight_unit' => 50.00,
            'currency_id'          => $currencyId,
            'warehouse_id'         => null,
            'created_by'           => $userId,
            'effective_at'         => Carbon::now()->subHour(),
            'expires_at'           => Carbon::now()->subMinutes(10),
            'status'               => 'active',
            'rate_source'          => 'manual',
            'weight_uom'           => 'g',
        ]);

        $current = $this->service->getCurrentRate($metalTypeId, $karatId);
        $this->assertNull($current);
    }

    /**
     * Test 13: Future warehouse-specific rate falls back to active company-wide rate.
     */
    public function test_future_warehouse_rate_falls_back_to_active_company_wide_rate(): void
    {
        $metalTypeId = 1;
        $karatId = 1;
        $currencyId = 1;
        $userId = 1;
        $warehouseId = 5;

        // Create an active company-wide rate (older, rate = 50)
        $companyRate = GoldRate::create([
            'metal_type_id'        => $metalTypeId,
            'karat_id'             => $karatId,
            'rate_per_weight_unit' => 50.00,
            'currency_id'          => $currencyId,
            'warehouse_id'         => null,
            'created_by'           => $userId,
            'effective_at'         => Carbon::now()->subHour(),
            'status'               => 'active',
            'rate_source'          => 'manual',
            'weight_uom'           => 'g',
        ]);

        // Create a future effective warehouse rate (newer, rate = 60)
        GoldRate::create([
            'metal_type_id'        => $metalTypeId,
            'karat_id'             => $karatId,
            'rate_per_weight_unit' => 60.00,
            'currency_id'          => $currencyId,
            'warehouse_id'         => $warehouseId,
            'created_by'           => $userId,
            'effective_at'         => Carbon::now()->addHour(),
            'status'               => 'active',
            'rate_source'          => 'manual',
            'weight_uom'           => 'g',
        ]);

        $current = $this->service->getCurrentRate($metalTypeId, $karatId, $warehouseId);

        $this->assertNotNull($current);
        $this->assertEquals($companyRate->id, $current->id);
        $this->assertEquals(50.00, $current->rate_per_weight_unit);
    }

    /**
     * Test 14: Returns null when all rates are future effective.
     */
    public function test_returns_null_when_all_rates_are_future_effective(): void
    {
        $metalTypeId = 1;
        $karatId = 1;
        $currencyId = 1;
        $userId = 1;

        GoldRate::create([
            'metal_type_id'        => $metalTypeId,
            'karat_id'             => $karatId,
            'rate_per_weight_unit' => 50.00,
            'currency_id'          => $currencyId,
            'warehouse_id'         => null,
            'created_by'           => $userId,
            'effective_at'         => Carbon::now()->addHour(),
            'status'               => 'active',
            'rate_source'          => 'manual',
            'weight_uom'           => 'g',
        ]);

        $current = $this->service->getCurrentRate($metalTypeId, $karatId);
        $this->assertNull($current);
    }

    /**
     * Test 15: syncFromApi computes a purity-adjusted rate from the metal's
     * spot price per gram and always stores it in USD.
     */
    public function test_sync_from_api_computes_purity_adjusted_rate_and_stores_in_usd(): void
    {
        $metalType = MetalType::create(['name' => 'Gold', 'code' => 'GOLD', 'is_active' => true]);
        $karat = Karat::create([
            'metal_type_id' => $metalType->id,
            'name' => '18K',
            'purity_percentage' => 75.00,
            'is_active' => true,
        ]);

        $priceService = \Mockery::mock(MetalPriceService::class);
        $priceService->shouldReceive('getSpotPricePerGramUsd')->with('GOLD')->andReturn(80.00);

        $rate = $this->service->syncFromApi($metalType, $karat, $priceService);

        $this->assertEquals('api', $rate->rate_source);
        $this->assertEquals(60.00, (float) $rate->rate_per_weight_unit); // 80 * 0.75
        $this->assertEquals('USD', Currency::find($rate->currency_id)->code);
    }

    /**
     * Test 16: when no manual rate matches the requested currency, an
     * api-sourced rate (stored in USD) is converted on the fly instead.
     */
    public function test_get_current_rate_converts_api_sourced_rate_to_requested_currency(): void
    {
        $usd = Currency::create(['code' => 'USD', 'name' => 'US Dollar', 'symbol' => '$']);
        $egp = Currency::create(['code' => 'EGP', 'name' => 'Egyptian Pound', 'symbol' => 'E£']);

        Http::fake([
            'https://open.er-api.com/*' => Http::response(['rates' => ['EGP' => 50.0]], 200),
        ]);

        GoldRate::create([
            'metal_type_id'        => 1,
            'karat_id'             => 1,
            'rate_per_weight_unit' => 60.00,
            'currency_id'          => $usd->id,
            'warehouse_id'         => null,
            'effective_at'         => Carbon::now(),
            'status'               => 'active',
            'rate_source'          => 'api',
            'weight_uom'           => 'g',
        ]);

        $current = $this->service->getCurrentRate(1, 1, null, $egp->id);

        $this->assertNotNull($current);
        $this->assertEquals($egp->id, $current->currency_id);
        $this->assertEquals(3000.00, (float) $current->rate_per_weight_unit); // 60 * 50
    }

    /**
     * Test 17: a manual rate in the requested currency always wins over an
     * api-sourced rate, even if the api rate is newer — manual entries are
     * currency-specific by design and must never be reinterpreted.
     */
    public function test_get_current_rate_prefers_exact_currency_manual_rate_over_api_fallback(): void
    {
        $usd = Currency::create(['code' => 'USD', 'name' => 'US Dollar', 'symbol' => '$']);
        $egp = Currency::create(['code' => 'EGP', 'name' => 'Egyptian Pound', 'symbol' => 'E£']);

        $manualRate = GoldRate::create([
            'metal_type_id'        => 1,
            'karat_id'             => 1,
            'rate_per_weight_unit' => 2500.00,
            'currency_id'          => $egp->id,
            'warehouse_id'         => null,
            'effective_at'         => Carbon::now()->subMinute(),
            'status'               => 'active',
            'rate_source'          => 'manual',
            'weight_uom'           => 'g',
        ]);

        GoldRate::create([
            'metal_type_id'        => 1,
            'karat_id'             => 1,
            'rate_per_weight_unit' => 60.00,
            'currency_id'          => $usd->id,
            'warehouse_id'         => null,
            'effective_at'         => Carbon::now(),
            'status'               => 'active',
            'rate_source'          => 'api',
            'weight_uom'           => 'g',
        ]);

        // No Http::fake — proves conversion is never attempted here.
        $current = $this->service->getCurrentRate(1, 1, null, $egp->id);

        $this->assertEquals($manualRate->id, $current->id);
        $this->assertEquals(2500.00, (float) $current->rate_per_weight_unit);
    }
}

