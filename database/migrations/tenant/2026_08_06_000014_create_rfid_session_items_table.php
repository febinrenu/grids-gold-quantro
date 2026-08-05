<?php
// SRS Table 62.

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('rfid_session_items')) {
            return;
        }

        Schema::create('rfid_session_items', function (Blueprint $table) {
            $table->collation = 'utf8mb4_unicode_ci';
            $table->charset = 'utf8mb4';

            $table->id();
            $table->unsignedBigInteger('rfid_inventory_session_id');
            $table->unsignedBigInteger('rfid_tag_id');
            $table->dateTime('detected_at');
            $table->string('reader_id', 60)->nullable();
            $table->decimal('signal_strength', 6, 2)->nullable();
            $table->unsignedInteger('detected_warehouse_location_id')->nullable();

            $table->index('rfid_inventory_session_id', 'rfid_session_items_session_id_index');
            $table->foreign('rfid_inventory_session_id', 'rfid_session_items_session_id_foreign')->references('id')->on('rfid_inventory_sessions')->onUpdate('restrict')->onDelete('cascade');
            $table->foreign('rfid_tag_id', 'rfid_session_items_tag_id_foreign')->references('id')->on('rfid_tags')->onUpdate('restrict')->onDelete('restrict');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('rfid_session_items');
    }
};
