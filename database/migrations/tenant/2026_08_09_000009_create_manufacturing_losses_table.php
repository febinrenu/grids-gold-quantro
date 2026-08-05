<?php
// SRS Table 111. Manager approval required above tolerance.

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('manufacturing_losses')) {
            return;
        }

        Schema::create('manufacturing_losses', function (Blueprint $table) {
            $table->collation = 'utf8mb4_unicode_ci';
            $table->charset = 'utf8mb4';

            $table->id();
            $table->unsignedBigInteger('manufacturing_order_id');
            $table->decimal('planned_loss', 10, 3)->nullable();
            $table->decimal('actual_loss', 10, 3)->nullable();
            $table->decimal('loss_percentage', 5, 2)->nullable();
            $table->unsignedInteger('approved_by')->nullable();
            $table->string('reason', 255)->nullable();

            $table->index('manufacturing_order_id', 'manufacturing_losses_order_id_index');
            $table->foreign('manufacturing_order_id', 'manufacturing_losses_order_id_foreign')->references('id')->on('manufacturing_orders')->onUpdate('restrict')->onDelete('cascade');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('manufacturing_losses');
    }
};
