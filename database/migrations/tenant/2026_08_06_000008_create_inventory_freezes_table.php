<?php
// SRS Table 56. Long-term legal/management lock, distinct from stock_holds below.

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('inventory_freezes')) {
            return;
        }

        Schema::create('inventory_freezes', function (Blueprint $table) {
            $table->collation = 'utf8mb4_unicode_ci';
            $table->charset = 'utf8mb4';

            $table->id();
            $table->string('freeze_number', 40);
            $table->unsignedInteger('product_id');
            $table->string('reason', 50);
            $table->unsignedInteger('frozen_by')->nullable();
            $table->dateTime('start_date');
            $table->dateTime('end_date')->nullable();
            $table->string('status', 20)->default('active');
            $table->timestamps(6);

            $table->unique('freeze_number', 'inventory_freezes_number_unique');
            $table->index('product_id', 'inventory_freezes_product_id_index');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('inventory_freezes');
    }
};
