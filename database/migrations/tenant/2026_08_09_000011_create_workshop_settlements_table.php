<?php
// SRS Table 113.

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('workshop_settlements')) {
            return;
        }

        Schema::create('workshop_settlements', function (Blueprint $table) {
            $table->collation = 'utf8mb4_unicode_ci';
            $table->charset = 'utf8mb4';

            $table->id();
            $table->unsignedBigInteger('workshop_id');
            $table->unsignedBigInteger('manufacturing_order_id')->nullable();
            $table->decimal('labour_charges', 12, 2)->default(0);
            $table->decimal('making_charges', 12, 2)->default(0);
            $table->decimal('gold_settlement_weight', 12, 3)->nullable();
            $table->decimal('stone_settlement_amount', 12, 2)->nullable();
            $table->string('status', 20)->default('pending');
            $table->timestamps(6);

            $table->index('workshop_id', 'workshop_settlements_workshop_id_index');
            $table->foreign('workshop_id', 'workshop_settlements_workshop_id_foreign')->references('id')->on('workshops')->onUpdate('restrict')->onDelete('restrict');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('workshop_settlements');
    }
};
