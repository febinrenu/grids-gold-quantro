<?php
// SRS Table 105. Automatically creates an inventory_movements row and a gold_ledger_entries row.

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('manufacturing_material_issues')) {
            return;
        }

        Schema::create('manufacturing_material_issues', function (Blueprint $table) {
            $table->collation = 'utf8mb4_unicode_ci';
            $table->charset = 'utf8mb4';

            $table->id();
            $table->unsignedBigInteger('manufacturing_order_id');
            $table->unsignedInteger('product_id')->nullable();
            $table->decimal('gold_weight', 12, 3);
            $table->decimal('fine_gold_weight', 12, 3)->nullable();
            $table->unsignedInteger('issued_by')->nullable();
            $table->date('issue_date');
            $table->timestamps(6);

            $table->index('manufacturing_order_id', 'manufacturing_material_issues_order_id_index');
            $table->foreign('manufacturing_order_id', 'manufacturing_material_issues_order_id_foreign')->references('id')->on('manufacturing_orders')->onUpdate('restrict')->onDelete('cascade');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('manufacturing_material_issues');
    }
};
