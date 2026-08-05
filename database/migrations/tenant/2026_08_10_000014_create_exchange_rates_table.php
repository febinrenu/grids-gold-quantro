<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('exchange_rates')) {
            return;
        }

        Schema::create('exchange_rates', function (Blueprint $table) {
            $table->collation = 'utf8mb4_unicode_ci';
            $table->charset = 'utf8mb4';

            $table->id();
            $table->unsignedInteger('base_currency_id');
            $table->unsignedInteger('target_currency_id');
            $table->decimal('rate', 14, 6);
            $table->date('effective_date');
            $table->string('source', 20)->default('manual');
            $table->timestamps(6);

            $table->index(['base_currency_id', 'target_currency_id', 'effective_date'], 'exchange_rates_pair_date_idx');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('exchange_rates');
    }
};
