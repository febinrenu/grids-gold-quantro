<?php
// SRS Table 118.

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('repair_payments')) {
            return;
        }

        Schema::create('repair_payments', function (Blueprint $table) {
            $table->collation = 'utf8mb4_unicode_ci';
            $table->charset = 'utf8mb4';

            $table->id();
            $table->unsignedBigInteger('repair_order_id');
            $table->decimal('amount', 12, 2);
            $table->string('payment_method', 30);
            $table->string('receipt_number', 40)->nullable();
            $table->dateTime('paid_at');

            $table->index('repair_order_id', 'repair_payments_order_id_index');
            $table->foreign('repair_order_id', 'repair_payments_order_id_foreign')->references('id')->on('repair_orders')->onUpdate('restrict')->onDelete('cascade');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('repair_payments');
    }
};
