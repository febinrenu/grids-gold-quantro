<?php
// SRS Table 108. Business rule: each finished piece receives a new serial number (product_serials row).

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('manufacturing_receipt_items')) {
            return;
        }

        Schema::create('manufacturing_receipt_items', function (Blueprint $table) {
            $table->collation = 'utf8mb4_unicode_ci';
            $table->charset = 'utf8mb4';

            $table->id();
            $table->unsignedBigInteger('manufacturing_receipt_id');
            $table->unsignedInteger('product_id')->nullable();
            $table->decimal('gross_weight', 12, 3)->nullable();
            $table->decimal('stone_weight', 10, 3)->nullable();
            $table->decimal('net_weight', 12, 3)->nullable();
            $table->decimal('fine_gold_weight', 12, 3)->nullable();
            $table->string('certificate_number', 191)->nullable();
            $table->string('hallmark_reference', 191)->nullable();

            $table->index('manufacturing_receipt_id', 'manufacturing_receipt_items_receipt_id_index');
            $table->foreign('manufacturing_receipt_id', 'manufacturing_receipt_items_receipt_id_foreign')->references('id')->on('manufacturing_receipts')->onUpdate('restrict')->onDelete('cascade');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('manufacturing_receipt_items');
    }
};
