<?php
// ST-4/PI-4 gap (diamond half — gold spot pricing already syncs live via
// MetalPriceService/GoldRateService). No free public Rapaport-equivalent API
// exists, so this follows a "bring your own feed" shape: the tenant points
// diamond_price_api_url at their own Rapaport-compatible subscription and
// this app just consumes it — same shape as the goldapi.io key setting.

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddDiamondPriceSettingsToSettingsTable extends Migration
{
    public function up()
    {
        Schema::table('settings', function (Blueprint $table) {
            if (! Schema::hasColumn('settings', 'diamond_price_sync_enabled')) {
                $table->boolean('diamond_price_sync_enabled')->default(false);
            }
            if (! Schema::hasColumn('settings', 'diamond_price_provider')) {
                $table->string('diamond_price_provider', 30)->default('http_feed');
            }
            if (! Schema::hasColumn('settings', 'diamond_price_api_url')) {
                $table->string('diamond_price_api_url', 255)->nullable();
            }
            if (! Schema::hasColumn('settings', 'diamond_price_api_key')) {
                $table->text('diamond_price_api_key')->nullable();
            }
        });
    }

    public function down()
    {
        Schema::table('settings', function (Blueprint $table) {
            $cols = ['diamond_price_sync_enabled', 'diamond_price_provider', 'diamond_price_api_url', 'diamond_price_api_key'];
            foreach ($cols as $c) {
                if (Schema::hasColumn('settings', $c)) {
                    $table->dropColumn($c);
                }
            }
        });
    }
}
