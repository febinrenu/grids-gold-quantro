<?php
// SRS Table 147.

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('financial_closings')) {
            return;
        }

        Schema::create('financial_closings', function (Blueprint $table) {
            $table->collation = 'utf8mb4_unicode_ci';
            $table->charset = 'utf8mb4';

            $table->id();
            $table->unsignedBigInteger('financial_period_id');
            $table->string('closing_type', 20)->default('month_end');
            $table->unsignedInteger('closed_by')->nullable();
            $table->date('closing_date');
            $table->string('status', 20)->default('closed');

            $table->index('financial_period_id', 'financial_closings_period_id_index');
            $table->foreign('financial_period_id', 'financial_closings_period_id_foreign')->references('id')->on('financial_periods')->onUpdate('restrict')->onDelete('cascade');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('financial_closings');
    }
};
