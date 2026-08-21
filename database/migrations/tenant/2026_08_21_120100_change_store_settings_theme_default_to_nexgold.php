<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

/**
 * NexGold Jewelers becomes the default storefront theme for newly provisioned
 * tenants. Existing tenants keep whatever theme they already have selected.
 */
return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasColumn('store_settings', 'theme')) {
            DB::statement("ALTER TABLE store_settings MODIFY theme VARCHAR(32) NOT NULL DEFAULT 'nexgold'");
        }
    }

    public function down(): void
    {
        if (Schema::hasColumn('store_settings', 'theme')) {
            DB::statement("ALTER TABLE store_settings MODIFY theme VARCHAR(32) NOT NULL DEFAULT 'default'");
        }
    }
};
