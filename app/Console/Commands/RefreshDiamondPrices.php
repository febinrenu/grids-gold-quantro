<?php

namespace App\Console\Commands;

use App\Models\Setting;
use App\Services\Jewelry\DiamondPriceService;
use App\Services\Jewelry\DiamondRateService;
use App\Tenant;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Log;

/**
 * ST-4/PI-4 gap (diamond half). Mirrors RefreshMetalRates exactly, gated by
 * its own tenant setting so a tenant can enable/disable each sync
 * independently.
 */
class RefreshDiamondPrices extends Command
{
    protected $signature = 'jewelry:refresh-diamond-prices';

    protected $description = 'Sync live diamond price-per-carat matrices into every tenant that has enabled it in Settings → Jewelry';

    protected const SHAPES = ['round', 'princess', 'cushion', 'oval', 'emerald', 'pear', 'asscher', 'radiant', 'marquise', 'heart'];

    public function handle(DiamondRateService $diamondRateService, DiamondPriceService $priceService): int
    {
        Tenant::where('status', 'active')->get()->each(function (Tenant $tenant) use ($diamondRateService, $priceService) {
            try {
                $tenant->run(function () use ($diamondRateService, $priceService, $tenant) {
                    $this->syncTenant($diamondRateService, $priceService, $tenant);
                });
            } catch (\Throwable $e) {
                Log::warning("Diamond price sync skipped tenant {$tenant->id} entirely: {$e->getMessage()}");
                $this->warn("Tenant {$tenant->id}: {$e->getMessage()}");
            }
        });

        return self::SUCCESS;
    }

    protected function syncTenant(DiamondRateService $diamondRateService, DiamondPriceService $priceService, Tenant $tenant): void
    {
        $setting = Setting::whereNull('deleted_at')->first();

        if (! ($setting->diamond_price_sync_enabled ?? false)) {
            return;
        }

        foreach (self::SHAPES as $shape) {
            try {
                $rows = $diamondRateService->syncFromApi($shape, $priceService);
                $this->info("  Synced {$shape} (" . count($rows) . " rows) for tenant {$tenant->id}");
            } catch (\Throwable $e) {
                Log::warning("Diamond price sync failed for {$shape}, tenant {$tenant->id}: {$e->getMessage()}");
                $this->warn("  {$shape}: {$e->getMessage()}");
            }
        }
    }
}
