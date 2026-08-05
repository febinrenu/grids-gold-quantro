<?php
// SRS Table 74.

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('goods_receipt_items')) {
            return;
        }

        Schema::create('goods_receipt_items', function (Blueprint $table) {
            $table->collation = 'utf8mb4_unicode_ci';
            $table->charset = 'utf8mb4';

            $table->id();
            $table->unsignedBigInteger('goods_receipt_id');
            $table->unsignedInteger('product_id');
            $table->decimal('received_weight', 12, 3)->nullable();
            $table->unsignedInteger('karat_id')->nullable();
            $table->decimal('purity_percentage', 5, 2)->nullable();
            $table->string('certificate_number', 191)->nullable();
            $table->string('hallmark_reference', 191)->nullable();
            $table->string('remarks', 255)->nullable();

            $table->index('goods_receipt_id', 'goods_receipt_items_grn_id_index');
            $table->foreign('goods_receipt_id', 'goods_receipt_items_grn_id_foreign')->references('id')->on('goods_receipts')->onUpdate('restrict')->onDelete('cascade');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('goods_receipt_items');
    }
};
