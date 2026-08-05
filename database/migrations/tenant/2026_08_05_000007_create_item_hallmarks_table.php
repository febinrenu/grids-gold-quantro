<?php
// SRS Table 35.

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('item_hallmarks')) {
            return;
        }

        Schema::create('item_hallmarks', function (Blueprint $table) {
            $table->collation = 'utf8mb4_unicode_ci';
            $table->charset = 'utf8mb4';

            $table->id();
            $table->unsignedInteger('product_id');
            $table->unsignedBigInteger('hallmark_id');
            $table->date('applied_date')->nullable();
            $table->unsignedInteger('verified_by')->nullable();
            $table->string('verification_result', 20)->nullable();
            $table->text('notes')->nullable();
            $table->timestamps(6);

            $table->index('product_id', 'item_hallmarks_product_id_index');
            $table->index('hallmark_id', 'item_hallmarks_hallmark_id_index');
            $table->foreign('hallmark_id', 'item_hallmarks_hallmark_id_foreign')->references('id')->on('hallmarks')->onUpdate('restrict')->onDelete('restrict');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('item_hallmarks');
    }
};
