<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('sale_details', function (Blueprint $table) {
            if (! Schema::hasColumn('sale_details', 'gold_rate_id')) {
                $table->unsignedInteger('gold_rate_id')->nullable()->after('pack_name');
            }
            if (! Schema::hasColumn('sale_details', 'gold_rate_value')) {
                $table->decimal('gold_rate_value', 12, 2)->nullable()->after('gold_rate_id');
            }
            if (! Schema::hasColumn('sale_details', 'karat_id')) {
                $table->unsignedInteger('karat_id')->nullable()->after('gold_rate_value');
            }
            if (! Schema::hasColumn('sale_details', 'metal_weight_used')) {
                $table->decimal('metal_weight_used', 12, 3)->nullable()->after('karat_id');
            }
            if (! Schema::hasColumn('sale_details', 'making_charge_amount')) {
                $table->decimal('making_charge_amount', 12, 2)->nullable()->after('metal_weight_used');
            }
            if (! Schema::hasColumn('sale_details', 'wastage_amount')) {
                $table->decimal('wastage_amount', 12, 2)->nullable()->after('making_charge_amount');
            }
            if (! Schema::hasColumn('sale_details', 'stone_value_amount')) {
                $table->decimal('stone_value_amount', 12, 2)->nullable()->after('wastage_amount');
            }
            if (! Schema::hasColumn('sale_details', 'price_breakdown')) {
                $table->json('price_breakdown')->nullable()->after('stone_value_amount');
            }
            if (! Schema::hasColumn('sale_details', 'override_approved_by')) {
                $table->unsignedInteger('override_approved_by')->nullable()->after('price_breakdown');
            }
        });

        Schema::table('sale_details', function (Blueprint $table) {
            if (Schema::hasColumn('sale_details', 'gold_rate_id')) {
                $table->index('gold_rate_id', 'sale_details_gold_rate_id_index');
            }
            if (Schema::hasColumn('sale_details', 'karat_id')) {
                $table->index('karat_id', 'sale_details_karat_id_index');
            }
            if (Schema::hasColumn('sale_details', 'override_approved_by')) {
                $table->index('override_approved_by', 'sale_details_override_approved_by_index');
            }
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('sale_details', function (Blueprint $table) {
            if (Schema::hasColumn('sale_details', 'gold_rate_id')) {
                try { $table->dropIndex('sale_details_gold_rate_id_index'); } catch (\Throwable $e) {}
            }
            if (Schema::hasColumn('sale_details', 'karat_id')) {
                try { $table->dropIndex('sale_details_karat_id_index'); } catch (\Throwable $e) {}
            }
            if (Schema::hasColumn('sale_details', 'override_approved_by')) {
                try { $table->dropIndex('sale_details_override_approved_by_index'); } catch (\Throwable $e) {}
            }

            $cols = [
                'gold_rate_id', 'gold_rate_value', 'karat_id', 'metal_weight_used',
                'making_charge_amount', 'wastage_amount', 'stone_value_amount',
                'price_breakdown', 'override_approved_by',
            ];
            foreach ($cols as $c) {
                if (Schema::hasColumn('sale_details', $c)) {
                    $table->dropColumn($c);
                }
            }
        });
    }
};
