<?php
// SRS Table 138. Business rule: closed periods cannot be modified.

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('financial_periods')) {
            return;
        }

        Schema::create('financial_periods', function (Blueprint $table) {
            $table->collation = 'utf8mb4_unicode_ci';
            $table->charset = 'utf8mb4';

            $table->id();
            $table->string('fiscal_year', 9)->comment('e.g. 2026-2027');
            $table->string('period_name', 30);
            $table->date('opening_date');
            $table->date('closing_date');
            $table->string('status', 20)->default('open');
            $table->timestamps(6);

        });
    }

    public function down(): void
    {
        Schema::dropIfExists('financial_periods');
    }
};
