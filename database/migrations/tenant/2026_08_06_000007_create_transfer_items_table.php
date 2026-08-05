<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('transfer_items')) {
            return;
        }

        Schema::create('transfer_items', function (Blueprint $table) {
            $table->collation = 'utf8mb4_unicode_ci';
            $table->charset = 'utf8mb4';

            $table->id();
            $table->integer('transfer_id');
            $table->unsignedInteger('product_id');
            $table->unsignedBigInteger('product_serial_id')->nullable();
            $table->decimal('dispatch_weight', 12, 3)->nullable();
            $table->decimal('receive_weight', 12, 3)->nullable();
            $table->string('dispatch_rfid', 64)->nullable();
            $table->string('receive_rfid', 64)->nullable();
            $table->decimal('quantity', 12, 3)->default(1);
            $table->string('remarks', 255)->nullable();
            $table->timestamps(6);

            $table->index('transfer_id', 'transfer_items_transfer_id_index');
            $table->index('product_id', 'transfer_items_product_id_index');
            $table->foreign('transfer_id', 'transfer_items_transfer_id_foreign')->references('id')->on('transfers')->onUpdate('restrict')->onDelete('cascade');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('transfer_items');
    }
};
