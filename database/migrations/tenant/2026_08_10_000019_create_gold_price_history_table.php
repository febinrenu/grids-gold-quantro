<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('gold_price_history')) {
            return;
        }

        Schema::create('gold_price_history', function (Blueprint $table) {
            $table->collation = 'utf8mb4_unicode_ci';
            $table->charset = 'utf8mb4';

            $table->id();
            $table->unsignedInteger('metal_type_id');
            $table->unsignedInteger('karat_id')->nullable();
            $table->unsignedInteger('currency_id');
            $table->date('effective_date');
            $table->decimal('buy_price', 12, 2)->nullable();
            $table->decimal('sell_price', 12, 2)->nullable();
            $table->string('source', 20)->default('manual');
            $table->unsignedInteger('approved_by')->nullable();
            $table->timestamp('created_at')->useCurrent();

            $table->index(['metal_type_id', 'karat_id', 'effective_date'], 'gold_price_history_lookup_idx');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('gold_price_history');
    }
};
