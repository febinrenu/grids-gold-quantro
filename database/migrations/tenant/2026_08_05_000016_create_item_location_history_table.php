<?php
// SRS Table 43. Append-only.

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('item_location_history')) {
            return;
        }

        Schema::create('item_location_history', function (Blueprint $table) {
            $table->collation = 'utf8mb4_unicode_ci';
            $table->charset = 'utf8mb4';

            $table->id();
            $table->unsignedInteger('product_id');
            $table->unsignedBigInteger('product_serial_id')->nullable();
            $table->unsignedInteger('previous_warehouse_location_id')->nullable();
            $table->unsignedInteger('new_warehouse_location_id')->nullable();
            $table->string('movement_type', 30)->nullable();
            $table->unsignedInteger('user_id')->nullable();
            $table->string('remarks', 255)->nullable();
            $table->timestamp('created_at')->useCurrent();

            $table->index('product_id', 'item_location_history_product_id_index');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('item_location_history');
    }
};
