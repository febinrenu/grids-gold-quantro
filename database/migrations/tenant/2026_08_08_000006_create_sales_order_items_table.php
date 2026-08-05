<?php
// SRS Table 90.

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('sales_order_items')) {
            return;
        }

        Schema::create('sales_order_items', function (Blueprint $table) {
            $table->collation = 'utf8mb4_unicode_ci';
            $table->charset = 'utf8mb4';

            $table->id();
            $table->unsignedBigInteger('sales_order_id');
            $table->unsignedInteger('product_id');
            $table->decimal('quantity', 12, 3)->default(1);
            $table->decimal('estimated_weight', 12, 3)->nullable();
            $table->unsignedBigInteger('reserved_inventory_id')->nullable()->comment('stock_reservations.id');
            $table->decimal('selling_price', 15, 3)->nullable();
            $table->string('status', 20)->default('pending');

            $table->index('sales_order_id', 'sales_order_items_order_id_index');
            $table->foreign('sales_order_id', 'sales_order_items_order_id_foreign')->references('id')->on('sales_orders')->onUpdate('restrict')->onDelete('cascade');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('sales_order_items');
    }
};
