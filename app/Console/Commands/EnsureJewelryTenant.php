<?php

namespace App\Console\Commands;

use App\Tenant;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;
use Stancl\Tenancy\Database\Models\Domain;

/**
 * Ensures every teammate's local setup resolves the same tenant DB name
 * (quantrocousr_tenant_jewelry) for the `jewelry` domain, instead of each
 * person ending up with a different auto-generated tenant database.
 * Safe to re-run — idempotent.
 */
class EnsureJewelryTenant extends Command
{
    protected $signature = 'tenant:ensure-jewelry
        {--domain=jewelry : The tenant domain to ensure exists}
        {--database=quantrocousr_tenant_jewelry : The fixed tenant database name to use}
        {--migrate : Also run tenant migrations against the resolved tenant}
        {--seed : Also run the tenant db:seed after migrating (implies --migrate)}';

    protected $description = 'Ensure the shared local jewelry tenant exists and points at a fixed database name';

    public function handle(): int
    {
        $domainName = (string) $this->option('domain');
        $dbName = (string) $this->option('database');

        if (! preg_match('/^[A-Za-z0-9_]+$/', $dbName)) {
            $this->error("Invalid database name '{$dbName}' — only letters, numbers, and underscores are allowed.");
            return self::FAILURE;
        }

        $domain = Domain::where('domain', $domainName)->first();
        $tenant = $domain?->tenant;

        if (! $tenant) {
            $tenant = Tenant::create([
                'company_name' => 'Jewelry Center',
                'admin_email'  => 'admin@' . $domainName . '.local',
                'status'       => Tenant::STATUS_ACTIVE,
            ]);

            $this->info("Created tenant {$tenant->id}.");
        } elseif ($tenant->status !== Tenant::STATUS_ACTIVE) {
            $tenant->status = Tenant::STATUS_ACTIVE;
            $tenant->save();
        }

        $tenant->setDatabaseCredentials(
            (string) config('database.connections.central.host', '127.0.0.1'),
            $dbName,
            (string) config('database.connections.central.username', 'root'),
            (string) config('database.connections.central.password', ''),
            (int) config('database.connections.central.port', 3306)
        );

        if (! $domain) {
            $tenant->domains()->create(['domain' => $domainName]);
            $this->info("Created domain '{$domainName}' -> tenant {$tenant->id}.");
        }

        $this->createDatabaseIfMissing($dbName);
        $this->ensureTenantStorageDirectories($tenant);

        if ($this->option('seed') || $this->option('migrate')) {
            $tenant->run(function () {
                \Illuminate\Support\Facades\Artisan::call('migrate', [
                    '--path'  => 'database/migrations/tenant',
                    '--force' => true,
                ]);
                $this->info('  Ran tenant migrations.');

                if ($this->option('seed')) {
                    \Illuminate\Support\Facades\Artisan::call('db:seed', ['--force' => true]);
                    $this->info('  Ran tenant seeders.');
                }
            });
        }

        $this->info("Jewelry tenant ready: domain={$domainName}, db={$dbName}, tenant_id={$tenant->id}");

        return self::SUCCESS;
    }

    /**
     * Belt-and-suspenders: a tenant created before this command existed (or
     * one whose local storage dir was cleaned up) would otherwise hit
     * "Please provide a valid cache path" on first request — the exact bug
     * this project already hit once. Re-create the directories every run.
     */
    protected function ensureTenantStorageDirectories(Tenant $tenant): void
    {
        $base = storage_path('tenant' . $tenant->id);

        foreach ([
            $base . '/app/public',
            $base . '/framework/cache/data',
            $base . '/framework/sessions',
            $base . '/framework/testing',
            $base . '/framework/views',
            $base . '/logs',
        ] as $dir) {
            File::ensureDirectoryExists($dir, 0755, true);
        }
    }

    protected function createDatabaseIfMissing(string $dbName): void
    {
        // Only MySQL has a real "create this schema" concept here — under
        // sqlite (e.g. testing) each connection is already its own isolated
        // database, so there's nothing to create.
        if (DB::connection('central')->getDriverName() !== 'mysql') {
            return;
        }

        $exists = DB::connection('central')->select(
            'SELECT SCHEMA_NAME FROM INFORMATION_SCHEMA.SCHEMATA WHERE SCHEMA_NAME = ?',
            [$dbName]
        );

        if (empty($exists)) {
            DB::connection('central')->statement(
                "CREATE DATABASE IF NOT EXISTS `{$dbName}` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci"
            );
            $this->info("Created database `{$dbName}`.");
        }
    }
}
