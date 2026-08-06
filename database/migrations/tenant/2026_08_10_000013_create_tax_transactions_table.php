<?php
// SRS Table 140.

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('tax_transactions')) {
            return;
        }

        Schema::create('tax_transactions', function (Blueprint $table) {
            $table->collation = 'utf8mb4_unicode_ci';
            $table->charset = 'utf8mb4';

            $table->id();
            $table->unsignedBigInteger('tax_code_id');
            $table->string('reference_type', 30);
            $table->unsignedBigInteger('reference_id')->nullable();
            $table->decimal('taxable_amount', 15, 3)->default(0);
            $table->decimal('tax_amount', 15, 3)->default(0);
            $table->date('transaction_date');

            $table->index('tax_code_id', 'tax_transactions_tax_code_id_index');
            $table->foreign('tax_code_id', 'tax_transactions_tax_code_id_foreign')->references('id')->on('tax_codes')->onUpdate('restrict')->onDelete('restrict');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('tax_transactions');
    }
};
