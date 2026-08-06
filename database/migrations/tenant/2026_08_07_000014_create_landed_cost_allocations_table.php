<?php
// SRS Table 81.

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('landed_cost_allocations')) {
            return;
        }

        Schema::create('landed_cost_allocations', function (Blueprint $table) {
            $table->collation = 'utf8mb4_unicode_ci';
            $table->charset = 'utf8mb4';

            $table->id();
            $table->string('allocation_number', 40);
            $table->integer('purchase_id');
            $table->string('cost_type', 40);
            $table->decimal('total_cost', 15, 3)->default(0);
            $table->string('allocation_method', 20)->default('by_value');
            $table->timestamps(6);

            $table->unique('allocation_number', 'landed_cost_allocations_number_unique');
            $table->index('purchase_id', 'landed_cost_allocations_purchase_id_index');
            $table->foreign('purchase_id', 'landed_cost_allocations_purchase_id_foreign')->references('id')->on('purchases')->onUpdate('restrict')->onDelete('cascade');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('landed_cost_allocations');
    }
};
