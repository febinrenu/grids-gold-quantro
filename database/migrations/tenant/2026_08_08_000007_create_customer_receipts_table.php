<?php
// SRS Table 93.

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('customer_receipts')) {
            return;
        }

        Schema::create('customer_receipts', function (Blueprint $table) {
            $table->collation = 'utf8mb4_unicode_ci';
            $table->charset = 'utf8mb4';

            $table->id();
            $table->string('receipt_number', 40);
            $table->integer('sale_id');
            $table->decimal('amount', 15, 3);
            $table->string('payment_method', 30);
            $table->string('transaction_reference', 191)->nullable();
            $table->unsignedInteger('received_by')->nullable();
            $table->dateTime('received_at');
            $table->timestamps(6);

            $table->unique('receipt_number', 'customer_receipts_number_unique');
            $table->index('sale_id', 'customer_receipts_sale_id_index');
            $table->foreign('sale_id', 'customer_receipts_sale_id_foreign')->references('id')->on('sales')->onUpdate('restrict')->onDelete('restrict');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('customer_receipts');
    }
};
