<?php
// SRS Table 120.

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('used_gold_purchase_items')) {
            return;
        }

        Schema::create('used_gold_purchase_items', function (Blueprint $table) {
            $table->collation = 'utf8mb4_unicode_ci';
            $table->charset = 'utf8mb4';

            $table->id();
            $table->unsignedBigInteger('used_gold_purchase_id');
            $table->decimal('gross_weight', 12, 3);
            $table->decimal('stone_weight', 10, 3)->nullable();
            $table->decimal('net_weight', 12, 3)->nullable();
            $table->decimal('purity_percentage', 5, 2)->nullable();
            $table->decimal('fine_gold_weight', 12, 3)->nullable();
            $table->decimal('purchase_rate', 12, 2)->nullable();

            $table->index('used_gold_purchase_id', 'used_gold_purchase_items_purchase_id_index');
            $table->foreign('used_gold_purchase_id', 'used_gold_purchase_items_purchase_id_foreign')->references('id')->on('used_gold_purchases')->onUpdate('restrict')->onDelete('cascade');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('used_gold_purchase_items');
    }
};
