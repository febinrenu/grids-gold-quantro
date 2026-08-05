<?php
// SRS Table 97. Old ring -> new necklace: links a used_gold_purchases row (Part 3.7) to a sales row (Part 1).

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('exchanges')) {
            return;
        }

        Schema::create('exchanges', function (Blueprint $table) {
            $table->collation = 'utf8mb4_unicode_ci';
            $table->charset = 'utf8mb4';

            $table->id();
            $table->string('exchange_number', 40);
            $table->integer('client_id');
            $table->unsignedBigInteger('used_gold_purchase_id')->nullable();
            $table->integer('sale_id')->nullable();
            $table->decimal('settlement_amount', 15, 3)->default(0);
            $table->timestamps(6);

            $table->unique('exchange_number', 'exchanges_number_unique');
            $table->index('client_id', 'exchanges_client_id_index');
            $table->foreign('client_id', 'exchanges_client_id_foreign')->references('id')->on('clients')->onUpdate('restrict')->onDelete('restrict');
            $table->foreign('sale_id', 'exchanges_sale_id_foreign')->references('id')->on('sales')->onUpdate('restrict')->onDelete('set null');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('exchanges');
    }
};
