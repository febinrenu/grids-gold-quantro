<?php
// SRS Table 119. Business rule: identity verification and before/after images mandatory; approval required beyond a configurable value threshold.

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('used_gold_purchases')) {
            return;
        }

        Schema::create('used_gold_purchases', function (Blueprint $table) {
            $table->collation = 'utf8mb4_unicode_ci';
            $table->charset = 'utf8mb4';

            $table->id();
            $table->string('purchase_number', 40);
            $table->integer('client_id');
            $table->date('purchase_date');
            $table->decimal('total_weight', 12, 3);
            $table->decimal('fine_gold_weight', 12, 3)->nullable();
            $table->decimal('purchase_value', 15, 3)->default(0);
            $table->string('payment_status', 20)->default('unpaid');
            $table->string('disposition', 20)->nullable();
            $table->unsignedInteger('approved_by')->nullable();
            $table->timestamps(6);
            $table->softDeletes();

            $table->unique('purchase_number', 'used_gold_purchases_number_unique');
            $table->index('client_id', 'used_gold_purchases_client_id_index');
            $table->foreign('client_id', 'used_gold_purchases_client_id_foreign')->references('id')->on('clients')->onUpdate('restrict')->onDelete('restrict');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('used_gold_purchases');
    }
};
