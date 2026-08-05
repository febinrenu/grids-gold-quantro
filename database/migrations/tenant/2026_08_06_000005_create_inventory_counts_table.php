<?php
// SRS Table 52.

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('inventory_counts')) {
            return;
        }

        Schema::create('inventory_counts', function (Blueprint $table) {
            $table->collation = 'utf8mb4_unicode_ci';
            $table->charset = 'utf8mb4';

            $table->id();
            $table->string('count_number', 40);
            $table->unsignedInteger('warehouse_id');
            $table->date('count_date');
            $table->string('count_type', 30)->default('periodic');
            $table->unsignedInteger('started_by')->nullable();
            $table->unsignedInteger('completed_by')->nullable();
            $table->string('status', 20)->default('in_progress');
            $table->timestamps(6);

            $table->unique('count_number', 'inventory_counts_number_unique');
            $table->index('warehouse_id', 'inventory_counts_warehouse_id_index');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('inventory_counts');
    }
};
