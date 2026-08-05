<?php
// SRS Table 104. Business rule: cannot be deleted after approval.

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('manufacturing_orders')) {
            return;
        }

        Schema::create('manufacturing_orders', function (Blueprint $table) {
            $table->collation = 'utf8mb4_unicode_ci';
            $table->charset = 'utf8mb4';

            $table->id();
            $table->string('manufacturing_number', 40);
            $table->unsignedBigInteger('branch_id')->nullable();
            $table->unsignedInteger('warehouse_id')->nullable();
            $table->unsignedBigInteger('workshop_id')->nullable();
            $table->unsignedBigInteger('product_template_id')->nullable();
            $table->unsignedBigInteger('design_id')->nullable();
            $table->integer('planned_quantity')->default(1);
            $table->integer('completed_quantity')->default(0);
            $table->decimal('planned_gold_weight', 12, 3)->nullable();
            $table->decimal('planned_fine_gold', 12, 3)->nullable();
            $table->decimal('estimated_stone_weight', 10, 3)->nullable();
            $table->date('order_date');
            $table->date('expected_completion')->nullable();
            $table->string('status', 20)->default('draft');
            $table->timestamps(6);
            $table->softDeletes();

            $table->unique('manufacturing_number', 'manufacturing_orders_number_unique');
            $table->index('workshop_id', 'manufacturing_orders_workshop_id_index');
            $table->foreign('workshop_id', 'manufacturing_orders_workshop_id_foreign')->references('id')->on('workshops')->onUpdate('restrict')->onDelete('set null');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('manufacturing_orders');
    }
};
