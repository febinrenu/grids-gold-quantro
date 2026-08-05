<?php
// SRS Table 142. Equivalent of a journal entry, measured in grams instead of currency — append-only.

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('gold_ledger_entries')) {
            return;
        }

        Schema::create('gold_ledger_entries', function (Blueprint $table) {
            $table->collation = 'utf8mb4_unicode_ci';
            $table->charset = 'utf8mb4';

            $table->id();
            $table->unsignedBigInteger('gold_ledger_account_id');
            $table->string('transaction_type', 30);
            $table->decimal('gross_weight', 12, 3)->nullable();
            $table->decimal('net_weight', 12, 3)->nullable();
            $table->decimal('fine_gold_weight', 12, 3);
            $table->decimal('purity_percentage', 5, 2)->nullable();
            $table->string('direction', 10);
            $table->string('reference_module', 40)->nullable();
            $table->unsignedBigInteger('reference_id')->nullable();
            $table->date('transaction_date');
            $table->timestamps(6);

            $table->index('gold_ledger_account_id', 'gold_ledger_entries_account_id_index');
            $table->index(['reference_module', 'reference_id'], 'gold_ledger_entries_reference_index');
            $table->foreign('gold_ledger_account_id', 'gold_ledger_entries_account_id_foreign')->references('id')->on('gold_ledger_accounts')->onUpdate('restrict')->onDelete('restrict');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('gold_ledger_entries');
    }
};
