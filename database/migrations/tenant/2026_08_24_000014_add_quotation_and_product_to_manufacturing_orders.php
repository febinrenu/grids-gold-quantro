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
        Schema::table('manufacturing_orders', function (Blueprint $table) {
            $table->integer('quotation_id')->nullable();
            $table->integer('product_id')->nullable();

            $table->foreign('quotation_id')->references('id')->on('quotations')->onDelete('set null');
            $table->foreign('product_id')->references('id')->on('products')->onDelete('set null');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('manufacturing_orders', function (Blueprint $table) {
            $table->dropForeign(['quotation_id']);
            $table->dropForeign(['product_id']);
            $table->dropColumn(['quotation_id', 'product_id']);
        });
    }
};
