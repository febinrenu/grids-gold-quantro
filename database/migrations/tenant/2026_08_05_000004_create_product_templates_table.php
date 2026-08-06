<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('product_templates')) {
            return;
        }

        Schema::create('product_templates', function (Blueprint $table) {
            $table->collation = 'utf8mb4_unicode_ci';
            $table->charset = 'utf8mb4';

            $table->id();
            $table->unsignedInteger('category_id');
            $table->string('template_code', 40);
            $table->string('template_name', 200);
            $table->unsignedBigInteger('design_id')->nullable();
            $table->unsignedInteger('brand_id')->nullable();
            $table->unsignedBigInteger('manufacturer_id')->nullable();
            $table->unsignedBigInteger('collection_id')->nullable();
            $table->unsignedInteger('default_karat_id')->nullable();
            $table->unsignedInteger('default_metal_type_id')->nullable();
            $table->decimal('default_making_charge', 12, 2)->nullable();
            $table->integer('warranty_months')->nullable();
            $table->text('description')->nullable();
            $table->boolean('is_active')->default(1);
            $table->timestamps(6);
            $table->softDeletes();

            $table->unique('template_code', 'product_templates_template_code_unique');
            $table->index('design_id', 'product_templates_design_id_index');
            $table->index('collection_id', 'product_templates_collection_id_index');
            $table->foreign('design_id', 'product_templates_design_id_foreign')->references('id')->on('product_designs')->onUpdate('restrict')->onDelete('set null');
            $table->foreign('collection_id', 'product_templates_collection_id_foreign')->references('id')->on('jewelry_collections')->onUpdate('restrict')->onDelete('set null');
            $table->foreign('manufacturer_id', 'product_templates_manufacturer_id_foreign')->references('id')->on('manufacturers')->onUpdate('restrict')->onDelete('set null');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('product_templates');
    }
};
