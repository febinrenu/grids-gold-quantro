<?php
// SRS Table 76.

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('supplier_invoices')) {
            return;
        }

        Schema::create('supplier_invoices', function (Blueprint $table) {
            $table->collation = 'utf8mb4_unicode_ci';
            $table->charset = 'utf8mb4';

            $table->id();
            $table->string('invoice_number', 60);
            $table->integer('provider_id');
            $table->date('invoice_date');
            $table->date('due_date')->nullable();
            $table->unsignedInteger('currency_id')->nullable();
            $table->decimal('exchange_rate', 14, 6)->default(1);
            $table->decimal('total_amount', 15, 3)->default(0);
            $table->decimal('tax_amount', 15, 3)->default(0);
            $table->decimal('discount_amount', 15, 3)->default(0);
            $table->string('status', 20)->default('unpaid');
            $table->timestamps(6);
            $table->softDeletes();

            $table->unique('invoice_number', 'supplier_invoices_number_unique');
            $table->index('provider_id', 'supplier_invoices_provider_id_index');
            $table->foreign('provider_id', 'supplier_invoices_provider_id_foreign')->references('id')->on('providers')->onUpdate('restrict')->onDelete('restrict');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('supplier_invoices');
    }
};
