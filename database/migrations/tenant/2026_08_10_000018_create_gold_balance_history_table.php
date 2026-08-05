<?php
// SRS Table 144. Immutable historical snapshots for trend analysis and audit.

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('gold_balance_history')) {
            return;
        }

        Schema::create('gold_balance_history', function (Blueprint $table) {
            $table->collation = 'utf8mb4_unicode_ci';
            $table->charset = 'utf8mb4';

            $table->id();
            $table->unsignedBigInteger('gold_ledger_account_id');
            $table->date('snapshot_date');
            $table->decimal('gross_weight', 14, 3)->default(0);
            $table->decimal('fine_gold_weight', 14, 3)->default(0);
            $table->string('snapshot_type', 20)->default('daily_closing');
            $table->timestamp('created_at')->useCurrent();

            $table->index(['gold_ledger_account_id', 'snapshot_date'], 'gold_balance_history_account_date_idx');
            $table->foreign('gold_ledger_account_id', 'gold_balance_history_account_id_foreign')->references('id')->on('gold_ledger_accounts')->onUpdate('restrict')->onDelete('cascade');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('gold_balance_history');
    }
};
