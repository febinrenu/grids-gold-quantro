<?php
// SRS Table 78. `purchase_returns` already exists (2026_03_24_203803) as a
// fully functioning feature (provider_id/purchase_id/warehouse_id with real
// FK constraints, statut/payment_statut, GrandTotal). Only the genuinely new
// SRS columns are added here.

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasColumn('purchase_returns', 'return_number')) {
            return;
        }

        Schema::table('purchase_returns', function (Blueprint $table) {
            $table->string('return_number', 40)->nullable();
            $table->string('return_reason', 255)->nullable();
            $table->unsignedInteger('approved_by')->nullable();

            $table->unique('return_number', 'purchase_returns_number_unique');
        });
    }

    public function down(): void
    {
        Schema::table('purchase_returns', function (Blueprint $table) {
            $table->dropUnique('purchase_returns_number_unique');
            $table->dropColumn(['return_number', 'return_reason', 'approved_by']);
        });
    }
};
