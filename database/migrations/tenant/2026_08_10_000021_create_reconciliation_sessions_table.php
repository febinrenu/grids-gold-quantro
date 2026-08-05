<?php
// SRS Table 148.

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('reconciliation_sessions')) {
            return;
        }

        Schema::create('reconciliation_sessions', function (Blueprint $table) {
            $table->collation = 'utf8mb4_unicode_ci';
            $table->charset = 'utf8mb4';

            $table->id();
            $table->string('session_number', 40);
            $table->string('reconciliation_type', 20);
            $table->unsignedBigInteger('reference_id')->nullable();
            $table->unsignedInteger('performed_by')->nullable();
            $table->string('status', 20)->default('in_progress');
            $table->timestamps(6);

            $table->unique('session_number', 'reconciliation_sessions_number_unique');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('reconciliation_sessions');
    }
};
