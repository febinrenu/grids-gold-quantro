<?php
// SRS Table 110. Tracks microscopic gold loss.

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('manufacturing_dust')) {
            return;
        }

        Schema::create('manufacturing_dust', function (Blueprint $table) {
            $table->collation = 'utf8mb4_unicode_ci';
            $table->charset = 'utf8mb4';

            $table->id();
            $table->unsignedBigInteger('manufacturing_order_id');
            $table->decimal('dust_weight', 10, 4);
            $table->decimal('estimated_fine_gold', 10, 4)->nullable();
            $table->date('recovery_date')->nullable();
            $table->string('refinery_reference', 150)->nullable();

            $table->index('manufacturing_order_id', 'manufacturing_dust_order_id_index');
            $table->foreign('manufacturing_order_id', 'manufacturing_dust_order_id_foreign')->references('id')->on('manufacturing_orders')->onUpdate('restrict')->onDelete('cascade');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('manufacturing_dust');
    }
};
