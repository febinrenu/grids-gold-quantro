<?php
// Task 1.8 (part 1) — copied exactly in style from the real
// database/migrations/tenant/2026_04_22_100300_add_pharmacy_mode_to_settings_table.php
// (named class, no return types, no ->after() — that file didn't use one either).

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddJewelryModeToSettingsTable extends Migration
{
    public function up()
    {
        Schema::table('settings', function (Blueprint $table) {
            if (! Schema::hasColumn('settings', 'jewelry_mode')) {
                $table->boolean('jewelry_mode')->default(false);
            }
            if (! Schema::hasColumn('settings', 'default_making_charge_type')) {
                $table->string('default_making_charge_type', 20)->nullable();
            }
            if (! Schema::hasColumn('settings', 'default_making_charge_value')) {
                $table->decimal('default_making_charge_value', 12, 2)->nullable();
            }
            if (! Schema::hasColumn('settings', 'default_wastage_type')) {
                $table->string('default_wastage_type', 25)->nullable();
            }
            if (! Schema::hasColumn('settings', 'default_wastage_value')) {
                $table->decimal('default_wastage_value', 12, 3)->nullable();
            }
            if (! Schema::hasColumn('settings', 'gold_rate_requires_approval')) {
                $table->boolean('gold_rate_requires_approval')->default(false);
            }
        });
    }

    public function down()
    {
        Schema::table('settings', function (Blueprint $table) {
            $cols = [
                'jewelry_mode', 'default_making_charge_type', 'default_making_charge_value',
                'default_wastage_type', 'default_wastage_value', 'gold_rate_requires_approval',
            ];
            foreach ($cols as $c) {
                if (Schema::hasColumn('settings', $c)) {
                    $table->dropColumn($c);
                }
            }
        });
    }
}
