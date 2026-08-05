<?php
// SRS Table 5. Showroom display cabinet.

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('display_cabinets')) {
            return;
        }

        Schema::create('display_cabinets', function (Blueprint $table) {
            $table->collation = 'utf8mb4_unicode_ci';
            $table->charset = 'utf8mb4';

            $table->id();
            $table->integer('warehouse_id');
            $table->string('cabinet_number', 30);
            $table->string('floor', 30)->nullable();
            $table->string('section', 60)->nullable();
            $table->string('lighting_type', 50)->nullable();
            $table->decimal('capacity', 12, 3)->nullable();
            $table->string('rfid_reader_id', 60)->nullable();
            $table->string('status', 20)->default('active');
            $table->timestamps(6);
            $table->softDeletes();

            $table->unique(['warehouse_id', 'cabinet_number'], 'display_cabinets_wh_number_unique');
            $table->foreign('warehouse_id', 'display_cabinets_warehouse_id_foreign')->references('id')->on('warehouses')->onUpdate('restrict')->onDelete('restrict');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('display_cabinets');
    }
};
