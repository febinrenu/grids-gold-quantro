<?php
// SRS Table 44. Append-only; satisfies SRS Business Rule 6 (fine gold weight overrides fully audited).

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('item_weight_history')) {
            return;
        }

        Schema::create('item_weight_history', function (Blueprint $table) {
            $table->collation = 'utf8mb4_unicode_ci';
            $table->charset = 'utf8mb4';

            $table->id();
            $table->unsignedInteger('product_id');
            $table->decimal('old_gross_weight', 12, 3)->nullable();
            $table->decimal('new_gross_weight', 12, 3)->nullable();
            $table->decimal('old_net_weight', 12, 3)->nullable();
            $table->decimal('new_net_weight', 12, 3)->nullable();
            $table->decimal('old_metal_weight', 12, 3)->nullable();
            $table->decimal('new_metal_weight', 12, 3)->nullable();
            $table->string('reason', 255)->nullable();
            $table->unsignedInteger('approved_by')->nullable();
            $table->timestamp('created_at')->useCurrent();

            $table->index('product_id', 'item_weight_history_product_id_index');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('item_weight_history');
    }
};
