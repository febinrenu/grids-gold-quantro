<?php
// SRS Table 6.

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('shelves')) {
            return;
        }

        Schema::create('shelves', function (Blueprint $table) {
            $table->collation = 'utf8mb4_unicode_ci';
            $table->charset = 'utf8mb4';

            $table->id();
            $table->unsignedBigInteger('display_cabinet_id');
            $table->string('shelf_number', 30);
            $table->decimal('capacity', 12, 3)->nullable();
            $table->string('status', 20)->default('active');
            $table->timestamps(6);
            $table->softDeletes();

            $table->unique(['display_cabinet_id', 'shelf_number'], 'shelves_cabinet_number_unique');
            $table->foreign('display_cabinet_id', 'shelves_display_cabinet_id_foreign')->references('id')->on('display_cabinets')->onUpdate('restrict')->onDelete('restrict');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('shelves');
    }
};
