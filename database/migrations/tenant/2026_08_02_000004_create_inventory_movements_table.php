<?php
// Unified, append-only inventory movement ledger — the customization brief's
// §9 requirement: every stock change (receiving, sales, returns, exchanges,
// repairs, transfers, adjustments, production, memo) recorded with
// company/branch/location/item/type/quantity_delta/weight_delta/source/user/date.
// Prior to this, each module (purchases, sales, transfers, adjustments) only
// mutated product_warehouse.qte directly with no per-movement trail.

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateInventoryMovementsTable extends Migration
{
    public function up()
    {
        Schema::create('inventory_movements', function (Blueprint $table) {
            $table->id();
            $table->unsignedInteger('warehouse_id');
            $table->unsignedInteger('warehouse_location_id')->nullable();
            $table->unsignedInteger('product_id');
            $table->unsignedInteger('product_variant_id')->nullable();
            // receiving, sale, return, exchange, repair, transfer, adjustment, production, memo
            $table->string('movement_type', 30);
            $table->decimal('quantity_delta', 14, 4)->default(0);
            $table->decimal('weight_delta', 14, 4)->nullable();
            // e.g. "Sale", "Transfer", "PurchaseOrder", "Adjustment"
            $table->string('source_type', 40)->nullable();
            $table->unsignedInteger('source_id')->nullable();
            $table->unsignedInteger('user_id')->nullable();
            $table->timestamp('created_at')->useCurrent();

            $table->index(['product_id', 'warehouse_id'], 'inv_mov_product_warehouse_idx');
            $table->index(['source_type', 'source_id'], 'inv_mov_source_idx');
        });
    }

    public function down()
    {
        Schema::dropIfExists('inventory_movements');
    }
}
