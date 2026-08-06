<?php
// SRS Table 50. Manager approval required; automatically generates an inventory_movements row and an audit_logs row.

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('stock_adjustments')) {
            return;
        }

        Schema::create('stock_adjustments', function (Blueprint $table) {
            $table->collation = 'utf8mb4_unicode_ci';
            $table->charset = 'utf8mb4';

            $table->id();
            $table->string('adjustment_number', 40);
            $table->unsignedInteger('product_id');
            $table->unsignedInteger('warehouse_id');
            $table->string('adjustment_type', 30);
            $table->string('old_value', 191)->nullable();
            $table->string('new_value', 191)->nullable();
            $table->string('reason', 255)->nullable();
            $table->unsignedInteger('approved_by')->nullable();
            $table->date('adjustment_date');
            $table->text('remarks')->nullable();
            $table->timestamps(6);

            $table->unique('adjustment_number', 'stock_adjustments_number_unique');
            $table->index('product_id', 'stock_adjustments_product_id_index');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('stock_adjustments');
    }
};
