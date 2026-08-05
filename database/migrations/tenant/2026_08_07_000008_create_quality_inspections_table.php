<?php
// SRS Table 75.

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('quality_inspections')) {
            return;
        }

        Schema::create('quality_inspections', function (Blueprint $table) {
            $table->collation = 'utf8mb4_unicode_ci';
            $table->charset = 'utf8mb4';

            $table->id();
            $table->unsignedBigInteger('goods_receipt_id')->nullable();
            $table->unsignedInteger('product_id')->nullable();
            $table->unsignedInteger('inspector_id')->nullable();
            $table->date('inspection_date');
            $table->json('checks')->nullable();
            $table->string('result', 20)->default('passed');
            $table->text('comments')->nullable();
            $table->timestamps(6);

            $table->index('goods_receipt_id', 'quality_inspections_grn_id_index');
            $table->foreign('goods_receipt_id', 'quality_inspections_grn_id_foreign')->references('id')->on('goods_receipts')->onUpdate('restrict')->onDelete('set null');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('quality_inspections');
    }
};
