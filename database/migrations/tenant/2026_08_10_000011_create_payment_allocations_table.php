<?php
// SRS Table 137. Supports partial/advance/split payments across multiple invoices.

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('payment_allocations')) {
            return;
        }

        Schema::create('payment_allocations', function (Blueprint $table) {
            $table->collation = 'utf8mb4_unicode_ci';
            $table->charset = 'utf8mb4';

            $table->id();
            $table->string('payment_type', 20);
            $table->unsignedBigInteger('payment_id');
            $table->string('invoice_type', 20);
            $table->unsignedBigInteger('invoice_id');
            $table->decimal('amount_allocated', 15, 3);
            $table->timestamps(6);

            $table->index(['payment_type', 'payment_id'], 'payment_allocations_payment_index');
            $table->index(['invoice_type', 'invoice_id'], 'payment_allocations_invoice_index');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('payment_allocations');
    }
};
