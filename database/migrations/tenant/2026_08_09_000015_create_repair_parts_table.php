<?php
// SRS Table 117.

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('repair_parts')) {
            return;
        }

        Schema::create('repair_parts', function (Blueprint $table) {
            $table->collation = 'utf8mb4_unicode_ci';
            $table->charset = 'utf8mb4';

            $table->id();
            $table->unsignedBigInteger('repair_order_id');
            $table->string('part_type', 30);
            $table->string('description', 191)->nullable();
            $table->decimal('cost', 12, 2)->nullable();

            $table->index('repair_order_id', 'repair_parts_order_id_index');
            $table->foreign('repair_order_id', 'repair_parts_order_id_foreign')->references('id')->on('repair_orders')->onUpdate('restrict')->onDelete('cascade');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('repair_parts');
    }
};
