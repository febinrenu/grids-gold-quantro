<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('manufacturing_receipts')) {
            return;
        }

        Schema::create('manufacturing_receipts', function (Blueprint $table) {
            $table->collation = 'utf8mb4_unicode_ci';
            $table->charset = 'utf8mb4';

            $table->id();
            $table->string('receipt_number', 40);
            $table->unsignedBigInteger('manufacturing_order_id');
            $table->unsignedInteger('received_by')->nullable();
            $table->date('receipt_date');
            $table->timestamps(6);

            $table->unique('receipt_number', 'manufacturing_receipts_number_unique');
            $table->index('manufacturing_order_id', 'manufacturing_receipts_order_id_index');
            $table->foreign('manufacturing_order_id', 'manufacturing_receipts_order_id_foreign')->references('id')->on('manufacturing_orders')->onUpdate('restrict')->onDelete('restrict');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('manufacturing_receipts');
    }
};
