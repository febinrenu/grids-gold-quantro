<?php
// SRS Table 143. Current balance, maintained by applying gold_ledger_entries.

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('gold_balances')) {
            return;
        }

        Schema::create('gold_balances', function (Blueprint $table) {
            $table->collation = 'utf8mb4_unicode_ci';
            $table->charset = 'utf8mb4';

            $table->id();
            $table->unsignedBigInteger('gold_ledger_account_id');
            $table->decimal('gross_weight', 14, 3)->default(0);
            $table->decimal('fine_gold_weight', 14, 3)->default(0);
            $table->dateTime('last_updated_at')->nullable();

            $table->unique('gold_ledger_account_id', 'gold_balances_account_id_unique');
            $table->foreign('gold_ledger_account_id', 'gold_balances_account_id_foreign')->references('id')->on('gold_ledger_accounts')->onUpdate('restrict')->onDelete('cascade');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('gold_balances');
    }
};
