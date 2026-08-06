<?php

namespace App\Console\Commands;

use App\Models\MetalType;
use App\Models\Setting;
use App\Services\Jewelry\GoldRateService;
use App\Services\Jewelry\MetalPriceService;
use App\Tenant;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Log;

class RefreshMetalRates extends Command
{
    protected $signature = 'jewelry:refresh-metal-rates';

    protected $description = 'Sync live precious metal spot prices (per karat, company-wide) into every tenant that has enabled it in Settings → Jewelry';

    public function handle(GoldRateService $goldRateService, MetalPriceService $priceService): int
    {
        Tenant::where('status', 'active')->get()->each(function (Tenant $tenant) use ($goldRateService, $priceService) {
            try {
                $tenant->run(function () use ($goldRateService, $priceService, $tenant) {
                    $this->syncTenant($goldRateService, $priceService, $tenant);
                });
            } catch (\Throwable $e) {
                // One unreachable/broken tenant (e.g. a database that no longer
                // exists) must never abort the sync for every other tenant.
                Log::warning("Metal rate sync skipped tenant {$tenant->id} entirely: {$e->getMessage()}");
                $this->warn("Tenant {$tenant->id}: {$e->getMessage()}");
            }
        });

        return self::SUCCESS;
    }

    protected function syncTenant(GoldRateService $goldRateService, MetalPriceService $priceService, Tenant $tenant): void
    {
        $setting = Setting::whereNull('deleted_at')->first();

        if (! ($setting->metal_price_sync_enabled ?? false)) {
            return;
        }

        $metalTypes = MetalType::where('is_active', true)->with('karats')->get();

        foreach ($metalTypes as $metalType) {
            $activeKarats = $metalType->karats->where('is_active', true);

            if ($activeKarats->isEmpty()) {
                continue;
            }

            // One spot-price fetch per metal (cached 15 min) covers every karat.
            try {
                $priceService->getSpotPricePerGramUsd($metalType->code);
            } catch (\Throwable $e) {
                Log::warning("Metal rate sync skipped {$metalType->code} for tenant {$tenant->id}: {$e->getMessage()}");
                $this->warn("  {$metalType->code}: {$e->getMessage()}");
                continue;
            }

            foreach ($activeKarats as $karat) {
                try {
                    $goldRateService->syncFromApi($metalType, $karat, $priceService);
                    $this->info("  Synced {$metalType->code} {$karat->name} for tenant {$tenant->id}");
                } catch (\Throwable $e) {
                    Log::warning("Metal rate sync failed for {$metalType->code} {$karat->name}, tenant {$tenant->id}: {$e->getMessage()}");
                    $this->warn("  {$metalType->code} {$karat->name}: {$e->getMessage()}");
                }
            }
        }
    }
}
