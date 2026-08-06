<?php

namespace Tests\Feature;

use Illuminate\Support\Facades\Artisan;
use Tests\TestCase;

class ExampleTest extends TestCase
{
    /**
     * The homepage reads from the 'central' connection (e.g. GeneralSetting).
     * That's a separate :memory: SQLite instance from whatever the default
     * connection is migrated to, and RefreshDatabase only migrates the
     * default connection once per test *process* (shared static flag), so a
     * per-class migrateFreshUsing() override is silently ignored whenever
     * another test class runs first. Migrate 'central' directly instead.
     */
    protected function setUp(): void
    {
        parent::setUp();

        Artisan::call('migrate', [
            '--database' => 'central',
            '--path' => 'database/migrations',
            '--force' => true,
        ]);
    }

    /**
     * A basic test example.
     *
     * @return void
     */
    public function test_basic_test()
    {
        $response = $this->get('/');

        $response->assertStatus(200);
    }
}
