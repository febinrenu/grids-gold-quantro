<?php
// SRS Table 53.

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('inventory_count_items')) {
            return;
        }

        Schema::create('inventory_count_items', function (Blueprint $table) {
            $table->collation = 'utf8mb4_unicode_ci';
            $table->charset = 'utf8mb4';

            $table->id();
            $table->unsignedBigInteger('inventory_count_id');
            $table->unsignedInteger('product_id');
            $table->unsignedInteger('expected_warehouse_location_id')->nullable();
            $table->unsignedInteger('counted_warehouse_location_id')->nullable();
            $table->decimal('expected_weight', 12, 3)->nullable();
            $table->decimal('counted_weight', 12, 3)->nullable();
            $table->decimal('variance', 12, 3)->nullable();
            $table->string('remarks', 255)->nullable();
            $table->timestamps(6);

            $table->index('inventory_count_id', 'inventory_count_items_count_id_index');
            $table->foreign('inventory_count_id', 'inventory_count_items_count_id_foreign')->references('id')->on('inventory_counts')->onUpdate('restrict')->onDelete('cascade');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('inventory_count_items');
    }
};
