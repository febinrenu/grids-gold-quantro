<?php
// SRS Table 63. Reconciliation never edits stock directly — it generates the required stock_adjustments rows.

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('inventory_reconciliations')) {
            return;
        }

        Schema::create('inventory_reconciliations', function (Blueprint $table) {
            $table->collation = 'utf8mb4_unicode_ci';
            $table->charset = 'utf8mb4';

            $table->id();
            $table->string('reconciliation_number', 40);
            $table->unsignedBigInteger('inventory_count_id')->nullable();
            $table->unsignedInteger('approved_by')->nullable();
            $table->boolean('adjustment_generated')->default(0);
            $table->date('completion_date')->nullable();
            $table->timestamps(6);

            $table->unique('reconciliation_number', 'inventory_reconciliations_number_unique');
            $table->foreign('inventory_count_id', 'inventory_reconciliations_count_id_foreign')->references('id')->on('inventory_counts')->onUpdate('restrict')->onDelete('set null');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('inventory_reconciliations');
    }
};
