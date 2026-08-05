<?php
// SRS Table 87. `quotations` already exists (2026_03_24_203803) as a fully
// functioning feature (client_id/warehouse_id with real FK constraints,
// GrandTotal, statut). Only the genuinely new SRS columns are added here.
// Business rule: a quotation does not affect inventory or accounting.

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasColumn('quotations', 'quotation_number')) {
            return;
        }

        Schema::table('quotations', function (Blueprint $table) {
            $table->string('quotation_number', 40)->nullable();
            $table->unsignedInteger('sales_agent_id')->nullable();
            $table->date('valid_until')->nullable();
            $table->unsignedInteger('gold_rate_id')->nullable();

            $table->unique('quotation_number', 'quotations_number_unique');
        });
    }

    public function down(): void
    {
        Schema::table('quotations', function (Blueprint $table) {
            $table->dropUnique('quotations_number_unique');
            $table->dropColumn(['quotation_number', 'sales_agent_id', 'valid_until', 'gold_rate_id']);
        });
    }
};
