<?php
// ST-3/PI-6 gap: weighing-scale hardware integration. A browser can't talk to
// a serial/USB scale directly, so this follows the same "bring your own
// bridge" shape as a card-present POS terminal: a small local agent on the
// counter PC exposes an HTTP endpoint the scale is wired into, and this app
// just calls it — see WeighingScaleService / HttpBridgeScaleProvider.

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddScaleSettingsToSettingsTable extends Migration
{
    public function up()
    {
        Schema::table('settings', function (Blueprint $table) {
            if (! Schema::hasColumn('settings', 'scale_integration_enabled')) {
                $table->boolean('scale_integration_enabled')->default(false);
            }
            if (! Schema::hasColumn('settings', 'scale_provider')) {
                $table->string('scale_provider', 30)->default('http_bridge');
            }
            if (! Schema::hasColumn('settings', 'scale_bridge_url')) {
                $table->string('scale_bridge_url', 255)->nullable();
            }
            if (! Schema::hasColumn('settings', 'scale_api_key')) {
                $table->text('scale_api_key')->nullable();
            }
        });
    }

    public function down()
    {
        Schema::table('settings', function (Blueprint $table) {
            $cols = ['scale_integration_enabled', 'scale_provider', 'scale_bridge_url', 'scale_api_key'];
            foreach ($cols as $c) {
                if (Schema::hasColumn('settings', $c)) {
                    $table->dropColumn($c);
                }
            }
        });
    }
}
