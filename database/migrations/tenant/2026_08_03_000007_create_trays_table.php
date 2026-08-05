<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('trays')) {
            return;
        }

        Schema::create('trays', function (Blueprint $table) {
            $table->collation = 'utf8mb4_unicode_ci';
            $table->charset = 'utf8mb4';

            $table->id();
            $table->unsignedBigInteger('shelf_id');
            $table->string('tray_code', 30);
            $table->decimal('capacity', 12, 3)->nullable();
            $table->decimal('weight_limit', 12, 3)->nullable();
            $table->decimal('current_weight', 12, 3)->default(0);
            $table->string('rfid_zone', 60)->nullable();
            $table->string('status', 20)->default('active');
            $table->timestamps(6);
            $table->softDeletes();

            $table->unique(['shelf_id', 'tray_code'], 'trays_shelf_code_unique');
            $table->foreign('shelf_id', 'trays_shelf_id_foreign')->references('id')->on('shelves')->onUpdate('restrict')->onDelete('restrict');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('trays');
    }
};
