<?php
// SRS Table 149.

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('reconciliation_items')) {
            return;
        }

        Schema::create('reconciliation_items', function (Blueprint $table) {
            $table->collation = 'utf8mb4_unicode_ci';
            $table->charset = 'utf8mb4';

            $table->id();
            $table->unsignedBigInteger('reconciliation_session_id');
            $table->string('expected_value', 191)->nullable();
            $table->string('actual_value', 191)->nullable();
            $table->string('difference', 191)->nullable();
            $table->string('resolution', 255)->nullable();

            $table->index('reconciliation_session_id', 'reconciliation_items_session_id_index');
            $table->foreign('reconciliation_session_id', 'reconciliation_items_session_id_foreign')->references('id')->on('reconciliation_sessions')->onUpdate('restrict')->onDelete('cascade');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('reconciliation_items');
    }
};
