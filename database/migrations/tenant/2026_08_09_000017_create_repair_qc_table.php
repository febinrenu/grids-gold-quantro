<?php
// SRS Table 127. Missing stones trigger incident reports (handled via comments/notifications, Part 3.9).

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('repair_qc')) {
            return;
        }

        Schema::create('repair_qc', function (Blueprint $table) {
            $table->collation = 'utf8mb4_unicode_ci';
            $table->charset = 'utf8mb4';

            $table->id();
            $table->unsignedBigInteger('repair_order_id');
            $table->string('repair_quality', 20)->default('pass');
            $table->decimal('weight_difference', 10, 3)->nullable();
            $table->boolean('stone_count_verified')->default(1);
            $table->text('customer_notes')->nullable();

            $table->index('repair_order_id', 'repair_qc_order_id_index');
            $table->foreign('repair_order_id', 'repair_qc_order_id_foreign')->references('id')->on('repair_orders')->onUpdate('restrict')->onDelete('cascade');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('repair_qc');
    }
};
