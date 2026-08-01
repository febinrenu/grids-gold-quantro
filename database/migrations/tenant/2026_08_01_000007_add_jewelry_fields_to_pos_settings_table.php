<?php
// Task 1.8 (part 2) — copied exactly in style from the real
// database/migrations/tenant/2026_05_12_120000_add_show_product_discount_to_pos_settings_table.php
// (anonymous class, return types, $table->engine = 'InnoDB', ->after()).
// network_printer_port is the last column in the real pos_settings table
// per its base migration, so the new block is chained after it.

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('pos_settings', function (Blueprint $table) {
            $table->engine = 'InnoDB';
            if (! Schema::hasColumn('pos_settings', 'show_gold_rate_on_pos')) {
                $table->boolean('show_gold_rate_on_pos')->default(1)->after('network_printer_port');
            }
            if (! Schema::hasColumn('pos_settings', 'allow_jewelry_price_override')) {
                $table->boolean('allow_jewelry_price_override')->default(0)->after('show_gold_rate_on_pos');
            }
            if (! Schema::hasColumn('pos_settings', 'jewelry_override_approval_threshold')) {
                $table->decimal('jewelry_override_approval_threshold', 12, 2)->nullable()->after('allow_jewelry_price_override');
            }
        });
    }

    public function down(): void
    {
        Schema::table('pos_settings', function (Blueprint $table) {
            $cols = ['show_gold_rate_on_pos', 'allow_jewelry_price_override', 'jewelry_override_approval_threshold'];
            foreach ($cols as $c) {
                if (Schema::hasColumn('pos_settings', $c)) {
                    $table->dropColumn($c);
                }
            }
        });
    }
};
