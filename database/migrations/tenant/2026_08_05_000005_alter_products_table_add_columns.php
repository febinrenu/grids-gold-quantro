<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasColumn('products', 'product_template_id')) {
            return;
        }

        Schema::table('products', function (Blueprint $table) {
            $table->unsignedBigInteger('product_template_id')->nullable();
            $table->index('product_template_id', 'products_product_template_id_index');
            $table->foreign('product_template_id', 'products_product_template_id_foreign')->references('id')->on('product_templates')->onUpdate('restrict')->onDelete('set null');
        });
    }

    public function down(): void
    {
        Schema::table('products', function (Blueprint $table) {
            $table->dropForeign('products_product_template_id_foreign');
            $table->dropIndex('products_product_template_id_index');
            $table->dropColumn('product_template_id');
        });
    }
};
