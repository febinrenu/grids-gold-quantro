<?php
// ST-2 gap: a sale auto-flagged for AML review because its total crossed the
// tenant's configured cash-transaction threshold. See AmlComplianceService.

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('aml_flagged_transactions')) {
            return;
        }

        Schema::create('aml_flagged_transactions', function (Blueprint $table) {
            $table->collation = 'utf8mb4_unicode_ci';
            $table->charset = 'utf8mb4';

            $table->id();
            $table->unsignedInteger('sale_id')->nullable();
            $table->unsignedInteger('client_id')->nullable();
            $table->decimal('transaction_amount', 14, 2);
            $table->unsignedInteger('currency_id')->nullable();
            $table->decimal('threshold_amount', 14, 2);
            $table->string('flag_reason', 100)->default('threshold_exceeded');
            $table->unsignedInteger('reviewed_by')->nullable();
            $table->string('review_status', 20)->default('pending'); // pending, cleared, reported
            $table->timestamp('reviewed_at')->nullable();
            $table->text('notes')->nullable();
            $table->timestamps(6);

            $table->unique('sale_id', 'aml_flagged_transactions_sale_id_unique');
            $table->index('review_status', 'aml_flagged_transactions_review_status_index');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('aml_flagged_transactions');
    }
};
