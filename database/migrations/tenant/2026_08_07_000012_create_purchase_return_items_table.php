<?php
// SRS Table 79.

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('purchase_return_items')) {
            return;
        }

        Schema::create('purchase_return_items', function (Blueprint $table) {
            $table->collation = 'utf8mb4_unicode_ci';
            $table->charset = 'utf8mb4';

            $table->id();
            $table->integer('purchase_return_id');
            $table->unsignedInteger('product_id');
            $table->decimal('return_weight', 12, 3)->nullable();
            $table->decimal('return_cost', 15, 3)->nullable();
            $table->string('reason', 255)->nullable();

            $table->index('purchase_return_id', 'purchase_return_items_return_id_index');
            $table->foreign('purchase_return_id', 'purchase_return_items_return_id_foreign')->references('id')->on('purchase_returns')->onUpdate('restrict')->onDelete('cascade');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('purchase_return_items');
    }
};
