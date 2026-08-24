<?php
// PI-5 gap: blends pure/scrap metal batches at known karats into a target
// karat, computing how much pure gold (to raise purity) or alloy metal (to
// dilute it) must be added. "applied" calculations post a GoldLedgerEntry
// and adjust the target GoldBalance — see AlloyCalculatorService::apply().

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('alloy_mix_calculations')) {
            return;
        }

        Schema::create('alloy_mix_calculations', function (Blueprint $table) {
            $table->collation = 'utf8mb4_unicode_ci';
            $table->charset = 'utf8mb4';

            $table->id();
            $table->unsignedBigInteger('gold_ledger_account_id')->nullable();
            $table->json('source_batches'); // [{karat_id, weight}]
            $table->unsignedBigInteger('target_karat_id');
            $table->decimal('target_weight', 12, 3)->nullable();
            $table->string('mode', 10)->default('auto'); // auto, dilute, enrich
            $table->decimal('total_source_weight', 12, 3)->default(0);
            $table->decimal('total_source_fine_weight', 12, 3)->default(0);
            $table->decimal('added_metal_weight', 12, 3)->default(0);
            $table->string('added_metal_type', 20)->nullable(); // pure_gold, alloy
            $table->decimal('resulting_weight', 12, 3)->default(0);
            $table->decimal('resulting_fine_weight', 12, 3)->default(0);
            $table->decimal('resulting_purity_percentage', 5, 2)->default(0);
            $table->string('status', 20)->default('draft'); // draft, applied
            $table->unsignedInteger('calculated_by')->nullable();
            $table->timestamp('applied_at')->nullable();
            $table->timestamps(6);

            $table->index('status', 'alloy_mix_calculations_status_index');
            $table->index('gold_ledger_account_id', 'alloy_mix_calculations_account_id_index');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('alloy_mix_calculations');
    }
};
