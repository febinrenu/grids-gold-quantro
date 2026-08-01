<?php
// Task 2.1 — gold_rates migration modeled on the jewelry foundation style

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
        if (Schema::hasTable('gold_rates')) {
            return;
        }

        Schema::create('gold_rates', function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->collation = 'utf8mb4_unicode_ci';
            $table->charset = 'utf8mb4';

            $table->integer('id', true);
            $table->unsignedInteger('warehouse_id')->nullable();
            $table->unsignedInteger('metal_type_id');
            $table->unsignedInteger('karat_id');
            $table->unsignedInteger('currency_id');
            $table->decimal('rate_per_weight_unit', 12, 2);
            $table->string('weight_uom', 20)->default('g');
            $table->string('rate_source', 20)->default('manual');
            $table->dateTime('effective_at');
            $table->dateTime('expires_at')->nullable();
            $table->string('status', 20)->default('active');
            $table->unsignedInteger('created_by')->nullable();
            $table->timestamps(6);

            $table->index(['metal_type_id', 'karat_id', 'warehouse_id', 'effective_at'], 'gold_rates_lookup_idx');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('gold_rates');
    }
};
