<?php
// SRS Table 116. Append-only progress log.

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('repair_tracking')) {
            return;
        }

        Schema::create('repair_tracking', function (Blueprint $table) {
            $table->collation = 'utf8mb4_unicode_ci';
            $table->charset = 'utf8mb4';

            $table->id();
            $table->unsignedBigInteger('repair_order_id');
            $table->string('stage', 30);
            $table->unsignedInteger('changed_by')->nullable();
            $table->dateTime('changed_at');
            $table->string('remarks', 255)->nullable();

            $table->index('repair_order_id', 'repair_tracking_order_id_index');
            $table->foreign('repair_order_id', 'repair_tracking_order_id_foreign')->references('id')->on('repair_orders')->onUpdate('restrict')->onDelete('cascade');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('repair_tracking');
    }
};
