<?php
// Lets a tenant configure their own live metal-price API provider and key
// from the Settings UI instead of a fixed .env value — new providers are
// added as new provider classes, never a schema change.

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddMetalPriceProviderToSettingsTable extends Migration
{
    public function up()
    {
        Schema::table('settings', function (Blueprint $table) {
            if (! Schema::hasColumn('settings', 'metal_price_sync_enabled')) {
                $table->boolean('metal_price_sync_enabled')->default(false);
            }
            if (! Schema::hasColumn('settings', 'metal_price_provider')) {
                $table->string('metal_price_provider', 30)->default('goldapi');
            }
            if (! Schema::hasColumn('settings', 'metal_price_api_key')) {
                $table->text('metal_price_api_key')->nullable();
            }
        });
    }

    public function down()
    {
        Schema::table('settings', function (Blueprint $table) {
            $cols = ['metal_price_sync_enabled', 'metal_price_provider', 'metal_price_api_key'];
            foreach ($cols as $c) {
                if (Schema::hasColumn('settings', $c)) {
                    $table->dropColumn($c);
                }
            }
        });
    }
}
