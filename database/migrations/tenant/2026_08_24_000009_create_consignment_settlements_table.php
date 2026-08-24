<?php
// PI-9 gap: products.ownership_type already flags an item as memo/
// consignment/supplier_consignment/customer_owned, but nothing settles the
// owner when such an item sells or is returned. That's what this table +
// ConsignmentSettlementService add. Rep commission itself is already
// automatic on every sale via CommissionService/SaleCommission — this is
// only the settlement-to-owner half of the gap.

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('consignment_settlements')) {
            return;
        }

        Schema::create('consignment_settlements', function (Blueprint $table) {
            $table->collation = 'utf8mb4_unicode_ci';
            $table->charset = 'utf8mb4';

            $table->id();
            $table->unsignedInteger('product_id');
            $table->unsignedInteger('sale_id')->nullable();
            $table->unsignedBigInteger('sale_detail_id')->nullable();
            $table->string('ownership_type', 30); // memo, consignment, supplier_consignment, customer_owned
            $table->string('owner_type', 20)->nullable(); // supplier, customer
            $table->unsignedInteger('owner_reference_id')->nullable();
            $table->string('settlement_type', 10)->default('sale'); // sale, return
            $table->decimal('quantity', 10, 2)->default(1);
            $table->decimal('unit_cost', 12, 2)->default(0);
            $table->decimal('total_owed', 14, 2)->default(0);
            $table->unsignedInteger('currency_id')->nullable();
            $table->string('status', 20)->default('pending'); // pending, settled, cancelled
            $table->timestamp('settled_at')->nullable();
            $table->unsignedInteger('settled_by')->nullable();
            $table->text('notes')->nullable();
            $table->timestamps(6);
            $table->softDeletes();

            $table->index('product_id', 'consignment_settlements_product_id_index');
            $table->index('sale_id', 'consignment_settlements_sale_id_index');
            $table->index('status', 'consignment_settlements_status_index');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('consignment_settlements');
    }
};
