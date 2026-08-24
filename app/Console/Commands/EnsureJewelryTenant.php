<?php

namespace App\Console\Commands;

use App\Models\Central\Plan;
use App\Models\Central\TenantSubscription;
use App\Tenant;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;
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
        {--tenant-id=fd81b188-8e8b-4ed3-9980-7cfad53e3c35 : The fixed tenant UUID to use — must match the id baked into database/jewelrydatabase.sql image paths and the storage/tenant<id> folder}
        {--migrate : Also run tenant migrations against the resolved tenant}
        {--seed : Also run the tenant db:seed after migrating (implies --migrate)}
        {--no-import : Skip importing database/jewelrydatabase.sql even on a freshly created database}';

    protected $description = 'Ensure the shared local jewelry tenant exists and points at a fixed database name';

    public function handle(): int
    {
        @ini_set('memory_limit', '512M');
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
                'id'           => (string) $this->option('tenant-id'),
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

        $wasCreated = $this->createDatabaseIfMissing($dbName);
        $this->ensureTenantStorageDirectories($tenant);
        $this->ensurePlatformInstalledMarker();
        $this->ensureActiveSubscription($tenant);

        if ($wasCreated && ! $this->option('no-import')) {
            $this->importSeedDumpIfPresent($dbName);
        }

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

        // Passport's oauth_clients are environment-specific credentials, not
        // portable data — database/jewelrydatabase.sql never includes them,
        // so every fresh import/migrate otherwise leaves auth completely
        // broken (login "succeeds" but every subsequent request bounces
        // back to /login because no client exists to mint a valid token).
        if ($wasCreated || $this->option('migrate') || $this->option('seed')) {
            $tenant->run(function () {
                $this->ensurePassportPersonalAccessClient();
            });
        }

        // Always pin the storefront's default theme — enforced on every run
        // (not just fresh creation) so it self-heals if the tenant DB is
        // ever dropped/reseeded from database/jewelrydatabase.sql, whose
        // baked-in theme value is stale.
        $tenant->run(function () {
            \Illuminate\Support\Facades\DB::table('store_settings')->update(['theme' => 'nexgold']);
            \Illuminate\Support\Facades\Cache::forget('store_settings');
        });

        $this->info("Jewelry tenant ready: domain={$domainName}, db={$dbName}, tenant_id={$tenant->id}");

        return self::SUCCESS;
    }

    /**
     * Idempotent: does nothing if a personal access client already exists.
     * Requires oauth_clients to already exist as a table, so only call this
     * after migrations have actually run.
     */
    protected function ensurePassportPersonalAccessClient(): void
    {
        if (! \Illuminate\Support\Facades\Schema::hasTable('oauth_clients')) {
            return;
        }

        $exists = DB::table('oauth_clients')->where('personal_access_client', true)->exists();

        if ($exists) {
            return;
        }

        \Illuminate\Support\Facades\Artisan::call('passport:client', [
            '--personal'      => true,
            '--name'          => 'Jewelry Personal Access Client',
            '--no-interaction' => true,
        ]);

        $this->info('  Created a Passport personal access client (auth would otherwise be broken).');
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

    /**
     * The whole tenant SPA (dashboard, POS, online store, portal) 503s with
     * "Platform not ready" until this marker exists (routes/tenant_web.php).
     * Normally created by the /setup wizard (SetupController::lastStep()),
     * which also seeds the super admin, plans, and Passport keys — none of
     * which this command can substitute for. This is just a defensive
     * belt-and-suspenders so running this command doesn't produce a
     * confusing 503 if it happens to run before or without /setup.
     */
    protected function ensurePlatformInstalledMarker(): void
    {
        if (Storage::disk('public')->exists('installed')) {
            return;
        }

        Storage::disk('public')->put('installed', 'OK');
        $this->info('  Created the platform "installed" marker.');
    }

    /**
     * A tenant created directly via Tenant::create() (as this command does)
     * never goes through any of the flows that normally create a
     * TenantSubscription (self-service signup, checkout, webhook, or a
     * super admin manually assigning a plan) — so without this, every
     * dashboard/API request for this tenant redirects to /billing/plans
     * with "Your subscription is inactive or expired."
     *
     * Picks a plan with the `online_orders` feature (needed for the online
     * store to be reachable at all), falling back to the "professional"
     * slug, falling back to whatever plan exists. If no plans exist yet
     * (i.e. the /setup wizard, which seeds them, hasn't run), warns and
     * skips cleanly — safe to just re-run this command after /setup.
     */
    protected function ensureActiveSubscription(Tenant $tenant): void
    {
        if (! \Illuminate\Support\Facades\Schema::connection('central')->hasTable('tenant_subscriptions')) {
            return;
        }

        $existing = TenantSubscription::where('tenant_id', $tenant->id)->get();
        if ($existing->contains(fn ($sub) => $sub->isActive())) {
            return;
        }

        if (! Plan::exists()) {
            $this->call('db:seed', ['--class' => 'Database\\Seeders\\Central\\PlansSeeder', '--force' => true]);
            $this->info('  No plans existed yet — seeded the default plan tiers.');
        }

        // Always activate local dev tenants on the most premium plan (highest
        // price = full feature set), so local testing never hits a feature
        // gate that only exists to upsell in production.
        $plan = Plan::orderByDesc('price')->first();

        if (! $plan) {
            $this->warn('  No subscription plans found and seeding produced none — check database/seeders/Central/PlansSeeder.php.');
            return;
        }

        TenantSubscription::create([
            'tenant_id'     => $tenant->id,
            'plan_id'       => $plan->id,
            'billing_cycle' => 'yearly',
            'amount'        => 0,
            'currency'      => 'USD',
            'status'        => TenantSubscription::STATUS_ACTIVE,
            'starts_at'     => now(),
            'ends_at'       => now()->addYears(10),
        ]);

        $this->info("  Activated subscription on plan '{$plan->name}' (has online_orders: " . ($plan->hasFeature('online_orders') ? 'yes' : 'no') . ').');
    }

    /**
     * @return bool true if the database did not exist and was just created.
     */
    protected function createDatabaseIfMissing(string $dbName): bool
    {
        // Only MySQL has a real "create this schema" concept here — under
        // sqlite (e.g. testing) each connection is already its own isolated
        // database, so there's nothing to create.
        if (DB::connection('central')->getDriverName() !== 'mysql') {
            return false;
        }

        $exists = DB::connection('central')->select(
            'SELECT SCHEMA_NAME FROM INFORMATION_SCHEMA.SCHEMATA WHERE SCHEMA_NAME = ?',
            [$dbName]
        );

        if (! empty($exists)) {
            return false;
        }

        DB::connection('central')->statement(
            "CREATE DATABASE IF NOT EXISTS `{$dbName}` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci"
        );
        $this->info("Created database `{$dbName}`.");

        return true;
    }

    /**
     * database/jewelrydatabase.sql is a full dump (structure + demo/business
     * data) of the shared jewelry tenant, kept in the repo so every teammate
     * gets the SAME real data instead of an empty schema. Only ever imported
     * into a database we just created — an existing database (someone's own
     * data) is never touched.
     */
    protected function importSeedDumpIfPresent(string $dbName): void
    {
        @ini_set('memory_limit', '512M');

        $dumpPath = base_path('database/jewelrydatabase.sql');

        if (! is_file($dumpPath)) {
            return;
        }

        $this->info('Importing seed data from database/jewelrydatabase.sql (this may take a moment)...');

        // Deliberately NOT a naive preg_split-on-semicolons + one statement
        // at a time via DB::unprepared(): that silently mis-splits multi-line
        // CREATE TABLE/INSERT statements, and since PDO's mysql driver
        // doesn't execute multiple statements passed in one call, the
        // "extra" half of a merged chunk is just silently dropped — no
        // exception, no warning, just missing tables. Bit us for real: 329
        // tables became 195 with a clean "success" logged. mysqli's native
        // multi_query() runs the whole file as MySQL itself parses it.
        $mysqli = @new \mysqli(
            (string) config('database.connections.central.host', '127.0.0.1'),
            (string) config('database.connections.central.username', 'root'),
            (string) config('database.connections.central.password', ''),
            $dbName,
            (int) config('database.connections.central.port', 3306)
        );

        if ($mysqli->connect_errno) {
            $this->warn("  Could not connect to import seed data: {$mysqli->connect_error}");
            return;
        }

        $sql = file_get_contents($dumpPath);

        // Strip MariaDB-only versioned comments (e.g. `/*M!100616 SET
        // @OLD_NOTE_VERBOSITY=... */;`, emitted by mariadb-dump), including
        // their trailing semicolon. MySQL's CLI client tolerates these
        // silently, but PHP's mysqli::multi_query() desyncs on them —
        // whether from the comment itself or from the empty statement left
        // behind if only the comment body is removed — and
        // more_results()/next_result() stops early with no error, silently
        // dropping every statement after it.
        $sql = preg_replace('/\/\*M!\d+.*?\*\/;?/s', '', $sql);

        if ($mysqli->multi_query($sql)) {
            do {
                if ($result = $mysqli->store_result()) {
                    $result->free();
                }
            } while ($mysqli->more_results() && $mysqli->next_result());
        }

        if ($mysqli->errno) {
            $this->warn("  Seed import reported an error: {$mysqli->error}");
        } else {
            $this->info('  Seed data imported.');
        }

        $mysqli->close();
    }
}
