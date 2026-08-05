<?php
// SRS Table 99.

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('installment_payments')) {
            return;
        }

        Schema::create('installment_payments', function (Blueprint $table) {
            $table->collation = 'utf8mb4_unicode_ci';
            $table->charset = 'utf8mb4';

            $table->id();
            $table->unsignedBigInteger('installment_plan_id');
            $table->date('due_date');
            $table->date('payment_date')->nullable();
            $table->decimal('amount', 15, 3);
            $table->decimal('penalty', 15, 3)->default(0);
            $table->string('status', 20)->default('pending');

            $table->index('installment_plan_id', 'installment_payments_plan_id_index');
            $table->foreign('installment_plan_id', 'installment_payments_plan_id_foreign')->references('id')->on('installment_plans')->onUpdate('restrict')->onDelete('cascade');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('installment_payments');
    }
};
