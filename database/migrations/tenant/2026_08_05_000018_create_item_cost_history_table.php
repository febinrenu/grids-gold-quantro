<?php
// SRS Table 45. Append-only.

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('item_cost_history')) {
            return;
        }

        Schema::create('item_cost_history', function (Blueprint $table) {
            $table->collation = 'utf8mb4_unicode_ci';
            $table->charset = 'utf8mb4';

            $table->id();
            $table->unsignedInteger('product_id');
            $table->decimal('old_cost', 15, 3)->nullable();
            $table->decimal('new_cost', 15, 3)->nullable();
            $table->decimal('old_making_charge_value', 12, 2)->nullable();
            $table->decimal('new_making_charge_value', 12, 2)->nullable();
            $table->decimal('old_selling_price', 15, 3)->nullable();
            $table->decimal('new_selling_price', 15, 3)->nullable();
            $table->string('reason', 255)->nullable();
            $table->unsignedInteger('changed_by')->nullable();
            $table->timestamp('created_at')->useCurrent();

            $table->index('product_id', 'item_cost_history_product_id_index');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('item_cost_history');
    }
};
