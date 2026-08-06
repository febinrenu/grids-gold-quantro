<?php
// SRS Table 133.

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('accounts_payable')) {
            return;
        }

        Schema::create('accounts_payable', function (Blueprint $table) {
            $table->collation = 'utf8mb4_unicode_ci';
            $table->charset = 'utf8mb4';

            $table->id();
            $table->integer('provider_id');
            $table->unsignedBigInteger('supplier_invoice_id')->nullable();
            $table->date('due_date')->nullable();
            $table->decimal('outstanding_amount', 15, 3)->default(0);
            $table->string('aging_bucket', 20)->nullable();
            $table->string('status', 20)->default('open');
            $table->timestamps(6);

            $table->index('provider_id', 'accounts_payable_provider_id_index');
            $table->foreign('provider_id', 'accounts_payable_provider_id_foreign')->references('id')->on('providers')->onUpdate('restrict')->onDelete('restrict');
            $table->foreign('supplier_invoice_id', 'accounts_payable_supplier_invoice_id_foreign')->references('id')->on('supplier_invoices')->onUpdate('restrict')->onDelete('set null');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('accounts_payable');
    }
};
