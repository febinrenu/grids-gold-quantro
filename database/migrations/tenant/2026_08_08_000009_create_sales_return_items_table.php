<?php
// SRS Table 95.

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('sales_return_items')) {
            return;
        }

        Schema::create('sales_return_items', function (Blueprint $table) {
            $table->collation = 'utf8mb4_unicode_ci';
            $table->charset = 'utf8mb4';

            $table->id();
            $table->unsignedBigInteger('sales_return_id');
            $table->unsignedInteger('product_id');
            $table->decimal('return_weight', 12, 3)->nullable();
            $table->decimal('return_value', 15, 3)->nullable();
            $table->string('condition', 30)->nullable();
            $table->decimal('refund_amount', 15, 3)->nullable();

            $table->index('sales_return_id', 'sales_return_items_return_id_index');
            $table->foreign('sales_return_id', 'sales_return_items_return_id_foreign')->references('id')->on('sales_returns')->onUpdate('restrict')->onDelete('cascade');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('sales_return_items');
    }
};
