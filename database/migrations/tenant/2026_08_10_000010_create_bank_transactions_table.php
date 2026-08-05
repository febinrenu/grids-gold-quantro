<?php
// SRS Table 136.

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('bank_transactions')) {
            return;
        }

        Schema::create('bank_transactions', function (Blueprint $table) {
            $table->collation = 'utf8mb4_unicode_ci';
            $table->charset = 'utf8mb4';

            $table->id();
            $table->unsignedBigInteger('bank_account_id');
            $table->string('transaction_type', 20);
            $table->decimal('amount', 15, 3);
            $table->date('transaction_date');
            $table->string('reference', 191)->nullable();
            $table->boolean('is_reconciled')->default(0);
            $table->timestamps(6);

            $table->index('bank_account_id', 'bank_transactions_account_id_index');
            $table->foreign('bank_account_id', 'bank_transactions_account_id_foreign')->references('id')->on('bank_accounts')->onUpdate('restrict')->onDelete('restrict');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('bank_transactions');
    }
};
