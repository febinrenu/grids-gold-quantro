<?php
// SRS Table 77.

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('supplier_invoice_items')) {
            return;
        }

        Schema::create('supplier_invoice_items', function (Blueprint $table) {
            $table->collation = 'utf8mb4_unicode_ci';
            $table->charset = 'utf8mb4';

            $table->id();
            $table->unsignedBigInteger('supplier_invoice_id');
            $table->unsignedInteger('purchase_detail_id')->nullable();
            $table->unsignedBigInteger('goods_receipt_item_id')->nullable();
            $table->decimal('cost', 15, 3)->default(0);
            $table->decimal('tax', 15, 3)->default(0);
            $table->decimal('discount', 15, 3)->default(0);
            $table->decimal('total', 15, 3)->default(0);

            $table->index('supplier_invoice_id', 'supplier_invoice_items_invoice_id_index');
            $table->foreign('supplier_invoice_id', 'supplier_invoice_items_invoice_id_foreign')->references('id')->on('supplier_invoices')->onUpdate('restrict')->onDelete('cascade');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('supplier_invoice_items');
    }
};
