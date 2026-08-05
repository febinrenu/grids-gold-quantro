<?php
// SRS Table 83. Updated periodically via scheduled_jobs (Part 3.9).

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('supplier_performance')) {
            return;
        }

        Schema::create('supplier_performance', function (Blueprint $table) {
            $table->collation = 'utf8mb4_unicode_ci';
            $table->charset = 'utf8mb4';

            $table->id();
            $table->integer('provider_id');
            $table->decimal('on_time_delivery_pct', 5, 2)->nullable();
            $table->decimal('quality_rating', 3, 2)->nullable();
            $table->decimal('price_competitiveness', 5, 2)->nullable();
            $table->decimal('return_rate_pct', 5, 2)->nullable();
            $table->decimal('average_lead_time_days', 6, 2)->nullable();
            $table->decimal('order_fulfillment_pct', 5, 2)->nullable();
            $table->decimal('total_purchases', 15, 3)->default(0);
            $table->date('last_purchase_date')->nullable();
            $table->timestamps(6);

            $table->unique('provider_id', 'supplier_performance_provider_id_unique');
            $table->foreign('provider_id', 'supplier_performance_provider_id_foreign')->references('id')->on('providers')->onUpdate('restrict')->onDelete('cascade');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('supplier_performance');
    }
};
