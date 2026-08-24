<?php
// ST-3/PI-6 gap: a captured weighing-scale reading, optionally tied to a
// product (e.g. before/after polishing) or a warehouse inventory check.

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('scale_readings')) {
            return;
        }

        Schema::create('scale_readings', function (Blueprint $table) {
            $table->collation = 'utf8mb4_unicode_ci';
            $table->charset = 'utf8mb4';

            $table->id();
            $table->unsignedInteger('product_id')->nullable();
            $table->unsignedInteger('warehouse_id')->nullable();
            $table->decimal('weight_grams', 12, 3);
            $table->string('context', 30)->nullable(); // e.g. before_polish, after_polish, inventory_check, sale, purchase
            $table->unsignedInteger('captured_by')->nullable();
            $table->timestamp('captured_at');
            $table->json('raw_payload')->nullable();
            $table->timestamps(6);

            $table->index('product_id', 'scale_readings_product_id_index');
            $table->index('warehouse_id', 'scale_readings_warehouse_id_index');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('scale_readings');
    }
};
