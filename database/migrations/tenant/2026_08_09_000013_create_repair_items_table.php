<?php
// SRS Table 115. Before/after images mandatory per SRS Module 18 business rules.

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('repair_items')) {
            return;
        }

        Schema::create('repair_items', function (Blueprint $table) {
            $table->collation = 'utf8mb4_unicode_ci';
            $table->charset = 'utf8mb4';

            $table->id();
            $table->unsignedBigInteger('repair_order_id');
            $table->decimal('gross_weight', 12, 3)->nullable();
            $table->decimal('stone_weight', 10, 3)->nullable();
            $table->json('before_images')->nullable();
            $table->json('after_images')->nullable();
            $table->text('damage_notes')->nullable();

            $table->index('repair_order_id', 'repair_items_order_id_index');
            $table->foreign('repair_order_id', 'repair_items_order_id_foreign')->references('id')->on('repair_orders')->onUpdate('restrict')->onDelete('cascade');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('repair_items');
    }
};
