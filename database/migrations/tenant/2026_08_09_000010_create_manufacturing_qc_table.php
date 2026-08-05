<?php
// SRS Table 126.

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('manufacturing_qc')) {
            return;
        }

        Schema::create('manufacturing_qc', function (Blueprint $table) {
            $table->collation = 'utf8mb4_unicode_ci';
            $table->charset = 'utf8mb4';

            $table->id();
            $table->unsignedBigInteger('manufacturing_order_id');
            $table->json('checks')->nullable();
            $table->string('result', 20)->default('pass');
            $table->unsignedInteger('inspected_by')->nullable();
            $table->dateTime('inspected_at')->nullable();

            $table->index('manufacturing_order_id', 'manufacturing_qc_order_id_index');
            $table->foreign('manufacturing_order_id', 'manufacturing_qc_order_id_foreign')->references('id')->on('manufacturing_orders')->onUpdate('restrict')->onDelete('cascade');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('manufacturing_qc');
    }
};
