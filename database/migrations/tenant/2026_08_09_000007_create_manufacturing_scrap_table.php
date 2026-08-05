<?php
// SRS Table 109.

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('manufacturing_scrap')) {
            return;
        }

        Schema::create('manufacturing_scrap', function (Blueprint $table) {
            $table->collation = 'utf8mb4_unicode_ci';
            $table->charset = 'utf8mb4';

            $table->id();
            $table->unsignedBigInteger('manufacturing_order_id');
            $table->unsignedInteger('metal_type_id')->nullable();
            $table->decimal('weight', 12, 3);
            $table->decimal('fine_gold_weight', 12, 3)->nullable();
            $table->string('recovery_status', 20)->default('pending');

            $table->index('manufacturing_order_id', 'manufacturing_scrap_order_id_index');
            $table->foreign('manufacturing_order_id', 'manufacturing_scrap_order_id_foreign')->references('id')->on('manufacturing_orders')->onUpdate('restrict')->onDelete('cascade');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('manufacturing_scrap');
    }
};
