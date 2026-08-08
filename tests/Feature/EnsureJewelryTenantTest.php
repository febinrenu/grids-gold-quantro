<?php

namespace Tests\Feature;

use App\Tenant;
use Illuminate\Support\Facades\Artisan;
use Stancl\Tenancy\Database\Models\Domain;
use Tests\TestCase;

/**
 * Tenants/domains live on the 'central' connection, which RefreshDatabase
 * doesn't reach here (see ExampleTest's docblock for why) — migrate it
 * directly instead.
 */
class EnsureJewelryTenantTest extends TestCase
{
    protected function setUp(): void
    {
        parent::setUp();

        Artisan::call('migrate', [
            '--database' => 'central',
            '--path' => 'database/migrations',
            '--force' => true,
        ]);
    }

    public function test_creates_the_tenant_and_domain_when_missing(): void
    {
        $exitCode = Artisan::call('tenant:ensure-jewelry', [
            '--domain' => 'jewelry',
            '--database' => 'test_tenant_jewelry_db',
        ]);

        $this->assertSame(0, $exitCode);

        $domain = Domain::where('domain', 'jewelry')->first();
        $this->assertNotNull($domain);

        $tenant = $domain->tenant;
        $this->assertNotNull($tenant);
        $this->assertSame(Tenant::STATUS_ACTIVE, $tenant->status);
        $this->assertSame('test_tenant_jewelry_db', $tenant->tenancy_db_name);
    }

    public function test_is_idempotent_and_does_not_duplicate_the_tenant(): void
    {
        Artisan::call('tenant:ensure-jewelry', [
            '--domain' => 'jewelry',
            '--database' => 'test_tenant_jewelry_db',
        ]);
        $firstTenantId = Domain::where('domain', 'jewelry')->first()->tenant_id;

        Artisan::call('tenant:ensure-jewelry', [
            '--domain' => 'jewelry',
            '--database' => 'test_tenant_jewelry_db',
        ]);

        $this->assertSame(1, Domain::where('domain', 'jewelry')->count());
        $this->assertSame(1, Tenant::count());
        $this->assertSame($firstTenantId, Domain::where('domain', 'jewelry')->first()->tenant_id);
    }

    public function test_rejects_an_unsafe_database_name(): void
    {
        $exitCode = Artisan::call('tenant:ensure-jewelry', [
            '--domain' => 'jewelry',
            '--database' => 'bad; DROP TABLE users;',
        ]);

        $this->assertSame(1, $exitCode);
        $this->assertSame(0, Tenant::count());
    }
}
