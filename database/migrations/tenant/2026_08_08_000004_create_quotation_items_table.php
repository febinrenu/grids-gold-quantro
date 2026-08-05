<?php
// SRS Table 88.

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('quotation_items')) {
            return;
        }

        Schema::create('quotation_items', function (Blueprint $table) {
            $table->collation = 'utf8mb4_unicode_ci';
            $table->charset = 'utf8mb4';

            $table->id();
            $table->integer('quotation_id');
            $table->unsignedBigInteger('product_template_id')->nullable();
            $table->unsignedInteger('product_id')->nullable();
            $table->decimal('estimated_weight', 12, 3)->nullable();
            $table->decimal('selling_price', 15, 3)->nullable();
            $table->decimal('making_charge', 12, 2)->nullable();
            $table->decimal('stone_cost', 12, 2)->nullable();
            $table->decimal('discount', 15, 3)->nullable()->default(0);
            $table->decimal('tax', 15, 3)->nullable()->default(0);

            $table->index('quotation_id', 'quotation_items_quotation_id_index');
            $table->foreign('quotation_id', 'quotation_items_quotation_id_foreign')->references('id')->on('quotations')->onUpdate('restrict')->onDelete('cascade');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('quotation_items');
    }
};
