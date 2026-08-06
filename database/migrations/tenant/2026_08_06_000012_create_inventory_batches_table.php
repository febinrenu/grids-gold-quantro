<?php
// SRS Table 60. Batch-managed raw materials (as opposed to unique serialized jewelry pieces).

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('inventory_batches')) {
            return;
        }

        Schema::create('inventory_batches', function (Blueprint $table) {
            $table->collation = 'utf8mb4_unicode_ci';
            $table->charset = 'utf8mb4';

            $table->id();
            $table->string('batch_number', 40);
            $table->string('material', 100);
            $table->unsignedInteger('supplier_id')->nullable();
            $table->date('manufacture_date')->nullable();
            $table->date('expiry_date')->nullable();
            $table->decimal('quantity', 14, 3)->default(0);
            $table->decimal('remaining_quantity', 14, 3)->default(0);
            $table->timestamps(6);

            $table->unique('batch_number', 'inventory_batches_number_unique');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('inventory_batches');
    }
};
