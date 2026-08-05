<?php
// SRS Table 98.

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('installment_plans')) {
            return;
        }

        Schema::create('installment_plans', function (Blueprint $table) {
            $table->collation = 'utf8mb4_unicode_ci';
            $table->charset = 'utf8mb4';

            $table->id();
            $table->string('plan_number', 40);
            $table->integer('client_id');
            $table->integer('sale_id');
            $table->integer('total_installments');
            $table->decimal('installment_amount', 15, 3);
            $table->decimal('outstanding_balance', 15, 3)->default(0);
            $table->string('status', 20)->default('active');
            $table->timestamps(6);

            $table->unique('plan_number', 'installment_plans_number_unique');
            $table->index('sale_id', 'installment_plans_sale_id_index');
            $table->foreign('sale_id', 'installment_plans_sale_id_foreign')->references('id')->on('sales')->onUpdate('restrict')->onDelete('restrict');
            $table->foreign('client_id', 'installment_plans_client_id_foreign')->references('id')->on('clients')->onUpdate('restrict')->onDelete('restrict');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('installment_plans');
    }
};
