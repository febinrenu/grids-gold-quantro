<?php

namespace App\Console\Commands;

use App\Tenant;
use Illuminate\Console\Command;
use Stancl\Tenancy\Database\Models\Domain;

class PointJewelryTenantLocal extends Command
{
    protected $signature = 'tenant:point-jewelry-local
                            {tenant? : Tenant UUID or existing domain. Defaults to the tenant resolved by --domain}
                            {--domain=jewelry : Bare tenant domain to resolve/ensure locally}
                            {--host=127.0.0.1 : Tenant database host}
                            {--port=3307 : Tenant database port}
                            {--database=quantrocousr_tenant_jewelry : Canonical local jewelry tenant database}
                            {--username=root : Tenant database username}
                            {--password= : Tenant database password}
                            {--activate : Mark the tenant active after updating credentials}
                            {--show-only : Show the resolved mapping without saving changes}';

    protected $description = 'Point the local jewelry tenant at the canonical quantrocousr_tenant_jewelry database.';

    public function handle(): int
    {
        $tenant = $this->resolveTenant();

        if (! $tenant) {
            $this->error('Could not find a tenant for the given identifier/domain.');
            $this->line('Try: php artisan tenant:point-jewelry-local --domain=jewelry');

            return self::FAILURE;
        }

        $domain = trim((string) $this->option('domain'));
        $host = trim((string) $this->option('host'));
        $port = (int) $this->option('port');
        $database = trim((string) $this->option('database'));
        $username = (string) $this->option('username');
        $password = (string) $this->option('password');
        $activate = (bool) $this->option('activate');
        $showOnly = (bool) $this->option('show-only');

        if ($domain === '' || $host === '' || $database === '' || $username === '' || $port < 1) {
            $this->error('Domain, host, database, username, and a valid port are required.');

            return self::FAILURE;
        }

        if ($showOnly) {
            $this->warn('SHOW ONLY — no changes will be written.');
        } else {
            if (! $this->ensureDomainIsAvailable($tenant, $domain)) {
                return self::FAILURE;
            }

            $this->ensureTenantDomain($tenant, $domain);
            $tenant->setDatabaseCredentials($host, $database, $username, $password, $port);

            if ($activate && $tenant->status !== Tenant::STATUS_ACTIVE) {
                $tenant->status = Tenant::STATUS_ACTIVE;
                $tenant->save();
            }

            $tenant->refresh();
        }

        $loginUrl = $this->buildLoginUrl($tenant, $domain);
        $tenantDomain = $tenant->domains()->orderBy('id')->value('domain') ?: $domain;
        $credentials = $showOnly
            ? [
                'host' => $host,
                'database' => $database,
                'username' => $username,
                'password' => $password,
                'port' => $port,
            ]
            : ($tenant->getDatabaseCredentials() ?: []);

        $this->table(
            ['Field', 'Value'],
            [
                ['Tenant ID', $tenant->id],
                ['Company', $tenant->company_name ?? ''],
                ['Status', $showOnly ? $tenant->status : $tenant->fresh()->status],
                ['Domain', $tenantDomain],
                ['DB Host', $credentials['host'] ?? $host],
                ['DB Port', (string) ($credentials['port'] ?? $port)],
                ['DB Name', $credentials['database'] ?? $database],
                ['DB User', $credentials['username'] ?? $username],
                ['Login URL', $loginUrl],
            ]
        );

        if (! $showOnly) {
            $this->info('Jewelry tenant mapping updated successfully.');
        }

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

    protected function ensureDomainIsAvailable(Tenant $tenant, string $domain): bool
    {
        $existing = Domain::query()->where('domain', $domain)->first();

        if ($existing && (string) $existing->tenant_id !== (string) $tenant->id) {
            $this->error("Domain '{$domain}' already belongs to tenant {$existing->tenant_id}.");

            return false;
        }

        return true;
    }

    protected function ensureTenantDomain(Tenant $tenant, string $domain): void
    {
        if (! $tenant->domains()->where('domain', $domain)->exists()) {
            $tenant->domains()->create(['domain' => $domain]);
        }
    }

    protected function buildLoginUrl(Tenant $tenant, string $fallbackDomain): string
    {
        $appUrl = rtrim((string) config('app.url', 'http://localhost:8000'), '/');
        $parts = parse_url($appUrl) ?: [];

        $scheme = $parts['scheme'] ?? 'http';
        $baseHost = $parts['host'] ?? 'localhost';
        $portSuffix = isset($parts['port']) ? ':' . $parts['port'] : '';

        $domain = $tenant->domains()->orderBy('id')->value('domain') ?: $fallbackDomain;
        $host = str_contains($domain, '.') ? $domain : "{$domain}.{$baseHost}";

        return "{$scheme}://{$host}{$portSuffix}/login";
    }
}
