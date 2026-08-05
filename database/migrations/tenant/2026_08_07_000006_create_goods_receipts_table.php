<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('goods_receipts')) {
            return;
        }

        Schema::create('goods_receipts', function (Blueprint $table) {
            $table->collation = 'utf8mb4_unicode_ci';
            $table->charset = 'utf8mb4';

            $table->id();
            $table->string('grn_number', 40);
            $table->integer('purchase_id');
            $table->unsignedInteger('warehouse_id');
            $table->unsignedInteger('received_by')->nullable();
            $table->date('receipt_date');
            $table->string('status', 20)->default('receiving');
            $table->string('inspection_status', 20)->default('pending');
            $table->timestamps(6);

            $table->unique('grn_number', 'goods_receipts_number_unique');
            $table->index('purchase_id', 'goods_receipts_purchase_id_index');
            $table->foreign('purchase_id', 'goods_receipts_purchase_id_foreign')->references('id')->on('purchases')->onUpdate('restrict')->onDelete('restrict');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('goods_receipts');
    }
};
