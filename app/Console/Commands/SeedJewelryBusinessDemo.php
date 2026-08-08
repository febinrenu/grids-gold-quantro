<?php

namespace App\Console\Commands;

use App\Tenant;
use Database\Seeders\JewelryBusinessExtendedSeeder;
use Database\Seeders\JewelryBusinessOperationalSeeder;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Artisan;

class SeedJewelryBusinessDemo extends Command
{
    protected $signature = 'tenant:seed-jewelry-business-demo
                            {tenant? : Tenant UUID or existing domain. Defaults to the tenant resolved by --domain}
                            {--domain=jewelry : Bare tenant domain used to resolve the local Jewelry tenant}';

    protected $description = 'Populate business-relevant Jewelry demo tables with coherent operational data.';

    public function handle(): int
    {
        $tenant = $this->resolveTenant();

        if (! $tenant) {
            $this->error('Could not find a tenant for the given identifier/domain.');
            $this->line('Try: php artisan tenant:seed-jewelry-business-demo --domain=jewelry');

            return self::FAILURE;
        }

        $this->info("Seeding Jewelry business demo data for tenant {$tenant->id}...");

        $tenant->run(function () {
            foreach ([
                JewelryBusinessOperationalSeeder::class,
                JewelryBusinessExtendedSeeder::class,
            ] as $seederClass) {
                Artisan::call('db:seed', [
                    '--class' => $seederClass,
                    '--force' => true,
                ]);
                $this->output->write(Artisan::output());
            }
        });

        $this->table(
            ['Field', 'Value'],
            [
                ['Tenant ID', $tenant->id],
                ['Domain', $tenant->domains()->orderBy('id')->value('domain') ?: ''],
                ['Status', $tenant->status],
                ['Seeders', JewelryBusinessOperationalSeeder::class . PHP_EOL . JewelryBusinessExtendedSeeder::class],
            ]
        );

        $this->info('Jewelry business demo data populated successfully.');

        return self::SUCCESS;
    }

    protected function resolveTenant(): ?Tenant
    {
        $identifier = $this->argument('tenant');
        $domain = trim((string) $this->option('domain'));

        $query = Tenant::query()->with('domains');

        if ($identifier) {
            return $query
                ->where('id', $identifier)
                ->orWhereHas('domains', function ($q) use ($identifier) {
                    $q->where('domain', $identifier);
                })
                ->first();
        }

        if ($domain !== '') {
            return $query
                ->whereHas('domains', function ($q) use ($domain) {
                    $q->where('domain', $domain);
                })
                ->first();
        }

        return null;
    }
}
