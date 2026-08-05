<?php
// SRS Table 125. Automatically generates: a used_gold_purchases row, a sales row, accounting entries, and gold ledger entries.

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('gold_exchange_transactions')) {
            return;
        }

        Schema::create('gold_exchange_transactions', function (Blueprint $table) {
            $table->collation = 'utf8mb4_unicode_ci';
            $table->charset = 'utf8mb4';

            $table->id();
            $table->integer('client_id');
            $table->unsignedBigInteger('used_gold_purchase_id')->nullable();
            $table->integer('sale_id')->nullable();
            $table->decimal('settlement_amount', 15, 3)->default(0);
            $table->timestamps(6);

            $table->index('client_id', 'gold_exchange_transactions_client_id_index');
            $table->foreign('client_id', 'gold_exchange_transactions_client_id_foreign')->references('id')->on('clients')->onUpdate('restrict')->onDelete('restrict');
            $table->foreign('used_gold_purchase_id', 'gold_exchange_transactions_used_gold_purchase_id_foreign')->references('id')->on('used_gold_purchases')->onUpdate('restrict')->onDelete('set null');
            $table->foreign('sale_id', 'gold_exchange_transactions_sale_id_foreign')->references('id')->on('sales')->onUpdate('restrict')->onDelete('set null');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('gold_exchange_transactions');
    }
};
