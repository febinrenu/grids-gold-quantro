<?php
// SRS Table 64. Short-term operational restriction, distinct from the longer-term inventory_freezes above.

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('stock_holds')) {
            return;
        }

        Schema::create('stock_holds', function (Blueprint $table) {
            $table->collation = 'utf8mb4_unicode_ci';
            $table->charset = 'utf8mb4';

            $table->id();
            $table->unsignedInteger('product_id');
            $table->string('hold_reason', 50);
            $table->unsignedInteger('held_by')->nullable();
            $table->dateTime('held_at');
            $table->dateTime('released_at')->nullable();
            $table->string('status', 20)->default('active');
            $table->timestamps(6);

            $table->index('product_id', 'stock_holds_product_id_index');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('stock_holds');
    }
};
