<?php
// SRS Table 65.

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('inventory_labels')) {
            return;
        }

        Schema::create('inventory_labels', function (Blueprint $table) {
            $table->collation = 'utf8mb4_unicode_ci';
            $table->charset = 'utf8mb4';

            $table->id();
            $table->unsignedInteger('product_id');
            $table->string('label_type', 30);
            $table->dateTime('printed_at');
            $table->unsignedInteger('printed_by')->nullable();
            $table->integer('print_count')->default(1);
            $table->string('printer', 100)->nullable();
            $table->timestamps(6);

            $table->index('product_id', 'inventory_labels_product_id_index');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('inventory_labels');
    }
};
