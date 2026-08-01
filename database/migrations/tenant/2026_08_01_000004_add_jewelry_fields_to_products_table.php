<?php
// Task 1.4 — copied exactly in style from the real
// database/migrations/tenant/2026_04_22_100000_add_batch_tracking_fields_to_products_table.php
// (named class, no return types, guarded per-column, index added in a
// second Schema::table call, down() drops index then columns).
//
// DO NOT touch weight/length/width/height — confirmed in the real
// create_products_table.php these are generic shipping-dimension columns
// used elsewhere and must be left exactly as they are.
//
// Chained ->after() so the new block reads as one group placed right after
// the existing pharmacy fields (drug_schedule is the last column batch
// tracking added).

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddJewelryFieldsToProductsTable extends Migration
{
    public function up()
    {
        Schema::table('products', function (Blueprint $table) {
            if (! Schema::hasColumn('products', 'is_jewelry_item')) {
                $table->boolean('is_jewelry_item')->default(false)->after('drug_schedule');
            }
            if (! Schema::hasColumn('products', 'jewelry_item_type')) {
                // serialized, weighted, style, set, service, non_stock
                $table->string('jewelry_item_type', 20)->nullable()->after('is_jewelry_item');
            }
            if (! Schema::hasColumn('products', 'metal_type_id')) {
                $table->unsignedInteger('metal_type_id')->nullable()->after('jewelry_item_type');
            }
            if (! Schema::hasColumn('products', 'karat_id')) {
                $table->unsignedInteger('karat_id')->nullable()->after('metal_type_id');
            }
            if (! Schema::hasColumn('products', 'jewelry_gross_weight')) {
                $table->decimal('jewelry_gross_weight', 12, 3)->nullable()->after('karat_id');
            }
            if (! Schema::hasColumn('products', 'jewelry_net_weight')) {
                $table->decimal('jewelry_net_weight', 12, 3)->nullable()->after('jewelry_gross_weight');
            }
            if (! Schema::hasColumn('products', 'jewelry_metal_weight')) {
                $table->decimal('jewelry_metal_weight', 12, 3)->nullable()->after('jewelry_net_weight');
            }
            if (! Schema::hasColumn('products', 'jewelry_weight_uom')) {
                $table->string('jewelry_weight_uom', 10)->default('g')->after('jewelry_metal_weight');
            }
            if (! Schema::hasColumn('products', 'hallmark_reference')) {
                $table->string('hallmark_reference', 191)->nullable()->after('jewelry_weight_uom');
            }
            if (! Schema::hasColumn('products', 'certificate_number')) {
                $table->string('certificate_number', 191)->nullable()->after('hallmark_reference');
            }
            if (! Schema::hasColumn('products', 'making_charge_type')) {
                // fixed, per_gram, percentage, manual, formula
                $table->string('making_charge_type', 20)->nullable()->after('certificate_number');
            }
            if (! Schema::hasColumn('products', 'making_charge_value')) {
                $table->decimal('making_charge_value', 12, 2)->nullable()->after('making_charge_type');
            }
            if (! Schema::hasColumn('products', 'wastage_type')) {
                // percentage_of_weight, percentage_of_value, fixed_value
                $table->string('wastage_type', 25)->nullable()->after('making_charge_value');
            }
            if (! Schema::hasColumn('products', 'wastage_value')) {
                $table->decimal('wastage_value', 12, 3)->nullable()->after('wastage_type');
            }
        });

        Schema::table('products', function (Blueprint $table) {
            if (Schema::hasColumn('products', 'is_jewelry_item')) {
                $table->index('is_jewelry_item', 'products_is_jewelry_item_index');
            }
        });
    }

    public function down()
    {
        Schema::table('products', function (Blueprint $table) {
            if (Schema::hasColumn('products', 'is_jewelry_item')) {
                try { $table->dropIndex('products_is_jewelry_item_index'); } catch (\Throwable $e) {}
            }
            $cols = [
                'is_jewelry_item', 'jewelry_item_type', 'metal_type_id', 'karat_id',
                'jewelry_gross_weight', 'jewelry_net_weight', 'jewelry_metal_weight', 'jewelry_weight_uom',
                'hallmark_reference', 'certificate_number', 'making_charge_type', 'making_charge_value',
                'wastage_type', 'wastage_value',
            ];
            foreach ($cols as $c) {
                if (Schema::hasColumn('products', $c)) {
                    $table->dropColumn($c);
                }
            }
        });
    }
}
